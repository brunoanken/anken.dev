import Head from 'next/head'

import Section from '../components/Molecules/Section'

import styles from './styles/index.module.scss'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Bruno Anken</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="column">

        <div className="presentation-container">

          <div className="presentation-picture-container">
            <div className="row padding">
              <img src="/images/profile.jpg" alt="Eu, Bruno Anken" className={`${styles['avatar']} round-border`} />
            </div>

            <h1 className="text-center">
              Olá, eu sou o Bruno Anken
            </h1>
          </div>

          <div>
            <p className={`${styles['main-text']} text-center padding`}>
              Tenho 25 anos, moro em São Paulo, sou engenheiro de software/desenvolvedor por profissão,
              engenheiro de computação por formação e músico por hobby.
            </p>

            <p className={`${styles['main-text']} text-center padding`}>
              Atuo com desenvolvimento full-stack mas sou mais íntimo do front-end.
            </p>
          </div>

        </div>

        <div className="padding text-center bg-magenta1">

          <h2>"Tá, legal, mas o que você sabe fazer?"</h2>
          <br />
          <p style={{ fontSize: '1.5rem' }}>Se liga:</p>

          <div className={styles['sections-grid']}>

            <Section imgSrc="/icons/code-white.svg">
              <p>Eu sei escrever código front-end, back-end e mobile!</p>
              <br />
              <p>O que eu manjo: React, React Native, Vue, Node, Go, DynamoDB, SQL e mais umas paradinhas</p>
            </Section>

            <Section imgSrc="/icons/briefcase-white.svg">
              <p>Tenho 2 anos e meio de experiência profissional!</p>
              <br />
              <p>É um tempo curto mas de imenso aprendizado e dedicação. Até hoje atuei em 2 empresas: <a href="https://www.meuacesso.com.br/">Acesso</a> e <a href="https://www.medpass.com.br/">MedPass</a></p>
            </Section>

            <Section imgSrc="/icons/user-white.svg">
              <p>Dê uma olhada no meu LinkedIn.</p>
              <br />
              <p>Ou veja outros meios de entrar em contato comigo, incluindo minhas redes sociais e meu GitHub!</p>
            </Section>

          </div>
        </div>

      </main>
    </div>
  )
}
