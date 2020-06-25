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

      <main className="row column">

        <div>

          <div className="row padding">
            <img src="/images/profile.jpg" alt="Eu, Bruno Anken" className={`${styles['avatar']} round-border`} />
          </div>

          <h1 className="text-center">
            Olá, eu sou o Bruno Anken
          </h1>

          <p className={`${styles['main-text']} text-center padding`}>
            Tenho 25 anos, moro em São Paulo, sou engenheiro de software/desenvolvedor por profissão,
            engenheiro de computação por formação e músico por hobby
          </p>

        </div>

        <div className="padding text-center bg-magenta1">

          <h2>"Tá, legal, mas o que você sabe fazer?"</h2>
          <br />
          <p style={{ fontSize: '1.5rem' }}>Se liga:</p>

          <div className={styles['sections-grid']}>

            <Section imgSrc="/icons/code-white.svg">
              <p>Eu sei escrever código front-end, back-end e mobile!</p>
              <br />
              <p>O que eu manjo: React, React Native, Vue, Node, Go e mais umas paradinhas</p>
            </Section>

            <Section imgSrc="/icons/briefcase-white.svg">
              <p>Tenho 2 anos e meio de experiência profissional!</p>
              <br />
              <p>É um tempo curto mas de imenso aprendizado e dedicação. Até hoje atuei na Acesso e na MedPass</p>
            </Section>

            <Section imgSrc="/icons/user-white.svg">
              <p>Dê uma olhada no meu LinkedIn.</p>
              <br />
              <p>Ou veja outros meios de entrar em contato comigo, incluindo minhas redes sociais e meu GitHub!</p>
            </Section>

          </div>
        </div>

        <div className="row column padding text-center" style={{ fontSize: '2rem' }}>
          <p>Acho que ficou claro que sou um desenvolvedor, não um designer.</p>
          <br />
          <p>Se quiser enviar alguma dica para que eu consiga melhorar este site é só entrar em contato comigo!</p>
        </div>

      </main>
    </div>
  )
}
