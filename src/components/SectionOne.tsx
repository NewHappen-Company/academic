import { Button } from 'angel_ui';
import React from 'react';
import { AcademicHeader } from './Header';

interface ISectionOneProps {
  onRegister: () => void;
}

function SectionOne({ onRegister }: ISectionOneProps) {
  return(
    <div className="flex flex-col h-128 bg-hero bg-cover no-repeat items-center w-full">
      <AcademicHeader/>
      <div className="w-full max-w-6xl flex flex-col justify-start mt-6">
        <h1 className="text-7xl font-bold text-white leading-snug">Cuide da sua Saúde Mental usando seu R.A</h1>
        <p className="text-2xl text-white leading-snug">Os alunos mais saudáveis</p>
        <Button btnType='primary' rounded shape='round' w='w-52' mt='mt-6' bg='bg-angelYellow' onClick={onRegister}>Me cadastrar agora</Button>
      </div>
    </div>
  );
}

export {SectionOne};