import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Document } from '../components/Document/Document';
import { returnAnalyticsData } from '../services/reqs/returnAnalyticsData';
import { Response } from '../models/analytics';

const Analytics: NextPage = () => {
  const [data, setData] = useState({} as Response);

  async function getDocument() {
    const query = new URLSearchParams(window.location.search);
    let tk = query.get('s');
    if(tk) {
      const result = await returnAnalyticsData({ tk });
      setData(result);
    }
  }

  useEffect(() => {
    getDocument();
  }, []);

  return(
    <div className='bg-hero bg-cover no-repeat'>
      <Head>
        <title>UTFPR - NH</title>
        <meta name="description" content="Cuide da saúde mental dos acadêmicos da UTFPR-Campo Mourão" />
      </Head>

      <main className={styles.main}>
        <Document data={data}/>
      </main>
    </div>
  );
}

export default Analytics;