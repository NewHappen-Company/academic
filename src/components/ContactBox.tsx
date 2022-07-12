import { Button } from 'angel_ui';
import React from 'react';

interface IContactBoxProps {}

function ContactBox({}: IContactBoxProps) {
  return(
    <div className="w-full max-w-6xl flex flex-col justify-start mt-20">
      <div className='w-full h-64 rounded-lg bg-contact p-10 justify-center flex flex-col'>
        <h1 className='w-1/3 text-3xl font-bold mb-6'>Deseja falar com alguém da equipe?</h1>
        <Button btnType='primary' rounded shape='round' w='w-56' mt='mt-6' bg='bg-angelYellow'>Fale com a Newhappen</Button>
      </div>
    </div>
  );
}

export {ContactBox};