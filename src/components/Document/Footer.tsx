import { Button, Column, UseToast } from 'angel_ui';
import React, { useState } from 'react';
import { createAppointment } from '../../services/reqs/createAppointment';
import { returnSolicitationFn } from '../../services/reqs/returnSolicitation';

interface IDocumentFooterProps {
  professionalId: string;
  scheduleId: string;
  userId: string;
  companyId: string;
  studentName: string;
  studentTel: string;
}

function DocumentFooter({professionalId, companyId, scheduleId, userId, studentName, studentTel}: IDocumentFooterProps) {
  const { addToast } = UseToast();
  const [loading, setLoading] = useState(false);
  const [loadingReturn, setLoadingReturn] = useState(false);
  
  function toastMessage(title: string, description: string) {
    addToast({
      title,
      description,
      withDecorator: true,
      position: 'top-right',
      duration: 5000
    })
  }

  async function createStudentAppointment() {
    setLoading(true);
    const result = await createAppointment({
      companyId,
      professionalId,
      scheduleId,
      userId
    });

    if(!result) {
      toastMessage('Erro ao criar agendamento', 'Por favor, tente novamente');
      setLoading(false);
    } else {
      toastMessage('Agendamento criado com sucesso', 'Agora você pode visulizar o atendimento no seu dashboard profissional');
      setLoading(false);
    }
  }

  async function returnSolicitation() {
    setLoadingReturn(true);
    returnSolicitationFn({ name: studentName, tel: studentTel });
    setTimeout(() => {
      toastMessage('Tudo certo', 'O aluno ficará sabendo do seu retorno. Obrigado por utilizar o serviço!');
      setLoadingReturn(false);
    }, 2000);
  }

  return(
    <Column mt='mt-10' horizontalAlign='start'>
      <Button 
        w="w-full" mb="mb-4"
        btnType='primary' 
        size='small' 
        bg='bg-angelYellow'
        isLoading={loading}
        onClick={createStudentAppointment}
      >
        Marcar o agendamento
      </Button>
      <Button 
        w="w-full"
        size='small' 
        isLoading={loadingReturn}
        onClick={returnSolicitation}
      >
        Devolver a solicitação
      </Button>
    </Column>
  );
}

export {DocumentFooter};