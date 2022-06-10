import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { UseToast } from 'angel_ui';
import { FormEvent, useState } from 'react';
import { isAll, validateEmail, validatePhone } from '../utils/validators';
import GenerateCodeForm, { ISubmitProps } from '../components/GenerateCodeForm';

const Home: NextPage = () => {
  const { addToast } = UseToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const utfprId = 'idDaUTFPR';

  function toastMessage(title: string, description: string) {
    addToast({
      title,
      description,
      withDecorator: true,
      position: 'top-right',
      duration: 5000
    })
  }

  function onSubmit(e: FormEvent, { studentEmail, studentName, studentNumber, studentPhone }: ISubmitProps) {
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

    if(validedEmail && all && validedPhone) {
      setLoading(true);
      // Levado para o backend
      console.log({
        studentName,
        studentNumber,
        studentEmail,
        utfprId
      })

      setCode('codigoGeradoParaCadastro');
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  function clearCode() {
    setCode('');
  }

  return (
    <div className='bg-hero bg-cover no-repeat'>
      <Head>
        <title>UTFPR - NH</title>
        <meta name="description" content="Cuide da saúde mental dos acadêmicos da UTFPR-Campo Mourão" />
      </Head>

      <main className={styles.main}>
        <GenerateCodeForm
          onSubmit={onSubmit}
          loading={loading}
          code={code}
          clearCode={clearCode}
        />
      </main>
    </div>
  )
}

export default Home
