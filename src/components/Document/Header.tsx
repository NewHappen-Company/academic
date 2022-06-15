import React from 'react';
import { UTFPRLogo } from '../utfpr';

interface IDocumentHeaderProps {
  professional: {
    name: string;
    professional: {
      professional_id: string;
    }
  }
}

function DocumentHeader({professional}: IDocumentHeaderProps) {
  return(
    <div className='w-full flex items-center justify-center'>
      <UTFPRLogo withMb={false}/>

      <div className='w-full flex flex-col justify-start ml-10'>
        <h1 className='text-xl font-extrabold'>Dados para análise de atendimento psicopedagógico</h1>
        <h1 className='text-md font-medium text-[#C4C4C4]'>{professional?.name} - CRP {professional?.professional?.professional_id}</h1>
      </div>
    </div>
  );
}

export {DocumentHeader};