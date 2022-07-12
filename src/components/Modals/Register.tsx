import { UseToast } from 'angel_ui';
import React, { FormEvent, useState } from 'react';
import { v4 } from 'uuid';
import { createStudents } from '../../services/reqs/createStudent';
import { isAll, validateEmail, validatePhone } from '../../utils/validators';
import GenerateCodeForm, { ISubmitProps } from '../GenerateCodeForm';

interface IRegisterProps {
  isOpen: boolean;
  onClose: () => void;
}

function Register({ isOpen, onClose }: IRegisterProps) {
  const { addToast } = UseToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const utfprId = process.env.NEXT_PUBLIC_UNIVERSITY_ID || v4();

  function toastMessage(title: string, description: string) {
    addToast({
      title,
      description,
      withDecorator: true,
      position: 'top-right',
      duration: 5000
    })
  }

  async function onSubmit(e: FormEvent, { studentEmail, studentName, studentNumber, studentPhone }: ISubmitProps) {
    e.preventDefault();
    // ----------------------------
    let all = isAll(studentName, studentEmail, studentNumber, studentPhone);
    let validedEmail = validateEmail(studentEmail.toLowerCase());
    let validedPhone = validatePhone(studentPhone);

    if(!all) {
      toastMessage('Todos os campos são obrigatórios', 'Por favor, insira todos os dados do aluno')
    }

    if(!validedEmail) {
      toastMessage('Email inválido', 'Por favor, insira um email válido da UTFPR')
    }

    if(!validedPhone) {
      toastMessage('Telefone inválido', 'Por favor, insira um telefone válido')
    }

    if(!utfprId) {
      toastMessage('Instituição inválida', 'Por favor, entre em contato conosco')
    }

    if(validedEmail && all && validedPhone && utfprId) {
      setLoading(true);
      // Levado para o backend
      // Essa requisição não é levada para o github.
      const codeInvite = await createStudents({
        name: studentName,
        email: studentEmail,
        phone: studentPhone,
        number: studentNumber,
        universityId: utfprId
      })

      toastMessage('Cadastro realizado com sucesso', 'Você receberá um código de convite no seu Whatsapp');

      setCode(codeInvite);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  function clearCode() {
    setCode('');
  }

  return(
    <>
    </>
  );
}

export {Register};