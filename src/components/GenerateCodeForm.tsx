import { Button, Column, Input, Row } from 'angel_ui';
import { Form } from '../components/Form';
import { UTFPRLogo } from '../components/utfpr';
import { Code } from '../components/Code';
import { phoneMask } from '../utils/phoneMask';
import { FormEvent, useState } from 'react';

export interface ISubmitProps {
  studentName: string;
  studentNumber: string;
  studentEmail: string;
  studentPhone: string;
}

export interface IGenerateCodeFormProps {
  onSubmit: (e: FormEvent, props: ISubmitProps) => void;
  loading: boolean;
  code: string;
  clearCode: () => void;
} 

function GenerateCodeForm({
  onSubmit,
  loading,
  code,
  clearCode
}: IGenerateCodeFormProps) {
  const [studentName, setStudentName] = useState<string>('');
  const [studentNumber, setStudentNumber] = useState<string>('');
  const [studentEmail, setStudentEmail] = useState<string>('');
  const [studentPhone, setStudentPhone] = useState<string>('');

  function goBack() {
    setStudentName('');
    setStudentNumber('');
    setStudentEmail('');
    setStudentPhone('');
    clearCode();
  }

  return (
    <Form data-testid="generate-code-form" onSubmit={(e) => onSubmit(e, { studentName, studentEmail, studentNumber, studentPhone })}>
      <Column w="w-full">
        <UTFPRLogo/>

        { !code ? (
          <>
            <div className='mb-6 w-72 flex'>
              <h1 className='text-lg text-center font-extrabold'>Gere o código para o seu cadastro abaixo</h1>
            </div>

            <Input 
              name="studentName"
              data-testid="studentName"
              placeholder="Ex:. Yuri Baza" 
              mb="mb-4" w='w-72' 
              isFieldset={true} 
              legend="Nome"
              activeColor='active-angelYellow'
              onChange={(e) => setStudentName(e.target.value)}
              value={studentName}
            />

            <Input 
              name="studentEmail"
              data-testid="studentEmail"
              placeholder="Ex:. johnny@alunos.utfpr.edu.br" 
              mb="mb-4" w='w-72' 
              isFieldset={true} 
              legend="E-mail"
              activeColor='active-angelYellow'
              onChange={(e) => setStudentEmail(e.target.value)}
              value={studentEmail}
            />

            <Input 
              name="studentNumber"
              data-testid="studentNumber"
              placeholder="Ex:. 1234567" 
              mb="mb-4" w='w-72' 
              isFieldset={true} 
              legend="R.A"
              activeColor='active-angelYellow'
              onChange={(e) => setStudentNumber(e.target.value)}
              value={studentNumber}
            />

            <Input 
              name="studentPhone"
              data-testid="studentPhone"
              placeholder="Ex:. (44) 99999-9999" 
              mb="mb-4" w='w-72' 
              isFieldset={true} 
              legend="Telefone celular"
              activeColor='active-angelYellow'
              onChange={(e) => setStudentPhone(phoneMask(e.target.value))}
              value={studentPhone}
            />
            
            <Button 
              name="submit"
              data-testid="submit"
              btnType='primary' 
              size='small' 
              bg='bg-angelYellow'
              type='submit' 
              isLoading={loading}
            >
              Gerar código
            </Button>
          </>
        ) : (
          <>
            <div className='mb-6 w-72 flex'>
              <h1 className='text-lg text-center font-extrabold'>Copie o seu código e faça seu cadastro</h1>
            </div>

            <Code data-testid="code-invite" text={code}/>

            <Row w="w-full" horizontalAlign='center' verticalAlign='center'>
              <Button 
                size='small' 
                onClick={goBack}
                mr="mr-4"
              >
                Voltar
              </Button>
              <Button 
                btnType='primary' 
                size='small' 
                bg='bg-angelYellow'
                type='submit' 
                isLoading={loading}
              >
                Ir para Google Play
              </Button>
            </Row>
          </>
        ) }
      </Column>
    </Form>
  )
}

export default GenerateCodeForm;
