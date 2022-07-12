/* eslint-disable @next/next/no-img-element */
import { IconButton, Row } from 'angel_ui';
import React from 'react';
import { Spacer } from './Spacer';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

interface IFooterProps {
  instagram: string;
  facebook: string;
  youtube: string;
  //-----
  privacy: string;
  terms: string;
}

function Footer({
  instagram,
  facebook,
  youtube,
  //-----
  privacy,
  terms,
}: IFooterProps) {
  return(
    <div className="w-full flex flex-col items-center justify-start bg-black p-10">
      <div className='w-full max-w-6xl flex justify-between my-10'>
        <div>
          <img src='./logo.svg' alt='logo'/>
          <Spacer/>
          <Row>
            <IconButton mr='mr-4' onClick={() => window.open(instagram)}>
              <FiInstagram color='rgba(243, 246, 249, 0.65)'/>
            </IconButton>
            <IconButton mr='mr-4' onClick={() => window.open(facebook)}>
              <FiFacebook color='rgba(243, 246, 249, 0.65)'/>
            </IconButton>
            <IconButton mr='mr-4' onClick={() => window.open(youtube)}>
              <FiYoutube color='rgba(243, 246, 249, 0.65)'/>
            </IconButton>
          </Row>
          <Spacer/>
          <Row horizontalAlign='between'>
            <a className='text-white' href={privacy} target='_blank' rel="noreferrer">Privacidade</a>
            <a className='text-white' href={terms} target='_blank' rel="noreferrer">Termos</a>
          </Row>
          <span className='text-footer'>2022, Newhappen</span>
        </div>

        <div className='flex'>
          <div className='w-56'>
            <h1 className='text-white font-bold text-2xl'>Nosso produto</h1>
            <Spacer/>
            <p className='text-footer text-justify'>Este produto oferece atendimento psicopedagógico a uma instituição de ensino enquanto faz a gestão dos profissionais envolvidos e fornece relatórios sobre o desenvolvimento dos alunos.</p>
          </div>
          <div className='w-56 ml-10'>
            <h1 className='text-white font-bold text-2xl'>Quem somos</h1>
            <Spacer/>
            <p className='text-footer text-justify'>Somos uma empresa de desenvolvimento de software focada em resolver problemas relacionados a saúde e a educação.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Footer};