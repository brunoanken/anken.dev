import Head from 'next/head'
import styles from './styles/index.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bruno Anken</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container column">

        <div className="container padding">
          <img src="/images/profile.jpg" alt="Eu, Bruno Anken" className="round-border" />
        </div>

        <h1 className="text-center">
          Olá, eu sou o Bruno Anken
        </h1>
        <p className={`${styles['main-text']} text-center padding`}>
          Dono de uma voz exagaradamente sexy, estou pronto para gemer a qualquer momento
        </p>

        <div className="bg-secondary padding text-center">
          <h2>"Tá, legal, mas pra que você serve?"</h2>
          <br />
          <p>Se liga, mané!</p>
          <br />

          <div className={styles['sections-grid']}>
            <p className="w">Pinto</p>
            <p className="w">Pinto</p>
            <p className="w">Pinto</p>
            <p className="w">Pinto</p>
          </div>
        </div>

      </main>
    </div>
  )
}
