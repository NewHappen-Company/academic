/* eslint-disable @next/next/no-img-element */
import { Header } from 'angel_ui';
import React from 'react';

interface IAcademicHeaderProps {}

function AcademicHeader({}: IAcademicHeaderProps) {
  return(
    <Header 
      logo={<img src="./logo.svg" alt='logo'/>}
      buttonOneText='Começar' 
      buttonTwoText='Login'
      buttonStyleOne={{
        bg: 'bg-angelYellow'
      }}
      buttonStyleTwo={{
        hoverBorderColor: 'hover:border-angelYellow',
        hoverText: 'hover:text-angelYellow'
      }}
      buttonOneClick={() => {
        alert('Começar');
      }}
      buttonTwoClick={() => {
        alert('Login');
      }}
    >
      <a className="ml-10 text-white font-semibold">Para usuários</a>
      <a className="ml-10 text-white font-semibold">Para empresas</a>
      <a className="ml-10 text-white font-semibold">Para profissionais</a>
    </Header>
  );
}

export {AcademicHeader};