import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [digimonList, setDigimonList] = useState([]);
  const [error, setError] = useState('');

  const liveUrl = 'https://digimon-card.vercel.app';
  const stagUrl = 'http://localhost:3000';
  
  let url = liveUrl + '/api/digimon';

  const getDigimon = async () => {
    fetch(url)
      .then(
        function (response) {
          if (response.status !== 200) {
            setError('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          // Examine the text in the response
          response.json().then(function (data) {
            setDigimonList(data);
          });
        }
      )
      .catch(function (err) {
        setError('Fetch Error :-S', err);
      });
  }

  useEffect(() => {
    getDigimon();
  }, []);

  const dt = new Date();
  const checkStatus = error != '' ? error : 'Loading ...';

  return (
    <div className={styles.container}>

      <Head>
        <title>Digimon Card List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Digimon Card List
        </h1>
        <div className={styles.grid}>
          {digimonList.length === 0 ? <p>{checkStatus}</p> :
            digimonList.map((obj, index) =>
              <div key={index} className={styles.card}>
                <p>{obj.name}</p>
                <img className={styles.digimonImg} src={obj.img} />
                <p>{obj.level}</p>
              </div>
            )
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/muhammadsyawaludin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;- Copyright © {dt.getFullYear()} شَوَّال‎
          </a>
        </p>
      </footer>
    </div>
  )
}
