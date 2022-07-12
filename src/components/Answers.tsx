import { Accordion } from 'angel_ui';
import React from 'react';
import { Spacer } from './Spacer';

interface IAnswersProps {}

function Answers({}: IAnswersProps) {
  return(
    <div className="w-full flex flex-col items-center justify-start mt-20 bg-base p-10">
      <div className='w-full max-w-6xl flex flex-col justify-start my-10'>
        <h1 className='text-3xl font-bold text-white mb-2'>Tem dúvidas sobre a plataforma?</h1>
        <p className='font-semibold text-subtitle mb-10'>Abaixo as principais dúvidas sobre a Newhappen para a instituições de ensino</p>
        <Accordion text="Como funciona a Newhappen para UTFPR?">
          Aqui o aluno de uma instituição de ensino pode usufruir dos atendimentos psicopedagógicos para ajudar a sua saúde mental. tem como objetivo ajudar pacientes a recuperarem o prazer pelo aprender, assim como corrigir déficits em seu processo de aprendizagem. Atualmente, os alunos da graduação e técnico de informática da UTFPR de Campo Mourão estão aptos a usar nossos serviços. 
        </Accordion>
        <Spacer/>
        <Accordion text="O que está incluso no atendimento?">
          Tudo o que o atendimento psicopedagógico pode oferecer está incluído no atendimento. Então se você tem medo de se relacionar com a instituição de ensino ou de estudar, se tem dificuldades de acreditar em seu potêncial, tem ansiedade quando precisa estudar, dificuldades em se concentrar ou se lembrar de fatos... podemos te ajudar!
        </Accordion>
        <Spacer/>
        <Accordion text="Quem pode utlizar a Newhappen para a UTFPR?">
          Todos os alunos do Campus da UTFPR de Campo Mourão.
        </Accordion>
        <Spacer/>
        <Accordion text="Quanto preciso investir na Newhappen para UTFPR?">
          Você não precisa investir nada. A Newhappen é gratuita para todos os alunos do Campus da UTFPR de Campo Mourão.
        </Accordion>
      </div>
    </div>
  );
}

export {Answers};