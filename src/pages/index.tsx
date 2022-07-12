/* eslint-disable @next/next/no-img-element */
import { BannerMkt, Link } from 'angel_ui';
import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react';
import { Answers } from '../components/Answers';
import { ContactBox } from '../components/ContactBox';
import { Footer } from '../components/Footer';
import { Register } from '../components/Modals/Register';
import { SectionOne } from '../components/SectionOne';

const Home: NextPage = () => {
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Newhappen Academic</title>
      </Head>

      <BannerMkt fontSize='text-sm'>😎 É aluno da UTFPR de Campo Mourão? <Link color='text-angelYellow'>Clique aqui</Link></BannerMkt>
      <SectionOne onRegister={() => setIsOpenRegister(true)}/>
      <ContactBox/>
      <Answers/>
      <Footer
        instagram='https://www.instagram.com/newhappen_br'
        facebook='https://pt-br.facebook.com/newHapn/'
        youtube='https://www.youtube.com/channel/UCiVim31cx1_E6anyhKt60cA'
        privacy=''
        terms=''
      />

      <Register isOpen={isOpenRegister} onClose={() => setIsOpenRegister(false)}/>
    </div>
  )
}

export default Home
