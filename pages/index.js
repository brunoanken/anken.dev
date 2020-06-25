import Head from 'next/head'

import Section from '../components/Molecules/Section'

import styles from './styles/index.module.scss'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Bruno Anken</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content="Bruno Anken" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anken.dev/" />
        <meta property="og:description" content="Sou um desenvolvedor que respira tecnologia e inovação." />
        <meta property="og:image" content="https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/104884352_3287815077909945_6267769813415984483_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeF9kXNp2S_5_T4hrUpLoqEMd-qDuY6LmfF36oO5jouZ8bCNgiqJpsUkrteTY-THXKonv53gaefOnUtU5KlzyJ-c&_nc_oc=AQmiiE10jBQinWfDQP-m7CP43Jkca7tt8UTxf-IwNDRGDgsbnF8IiwDSmzpto92MiRNdlry9AL0u-dQOqbUEh0id&_nc_ht=scontent.fcgh9-1.fna&oh=1431aa2fe4c795f4c34fde1d0dafc17b&oe=5F1A5D24" />
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
              Atuo com desenvolvimento full-stack e tenho maior aprofundamento em front-end.
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
              <p>O que eu manjo: React, React Native, Vue, Node, Go, DynamoDB, SQL e mais umas paradinhas.</p>
            </Section>

            <Section imgSrc="/icons/briefcase-white.svg">
              <p>Tenho 2 anos e meio de experiência profissional!</p>
              <br />
              <p>É um tempo curto mas de imenso aprendizado e dedicação. Até hoje atuei em 2 empresas: <a href="https://www.meuacesso.com.br/">Acesso</a> e <a href="https://www.medpass.com.br/">MedPass</a>.</p>
            </Section>

            <Section imgSrc="/icons/user-white.svg">
              <p>Sou muito comunicativo e gosto de ajudar a mentorar profissionais menos experientes (apesar de minha carreira ainda ser curta).</p>
              <br />
              <p>Estou sempre antenado nas novas tecnologias e tendências buscando oportunidades para aplicá-las, quando isto for vantajoso para o projeto/empresa.</p>
            </Section>

          </div>
        </div>

      </main>
    </div>
  )
}
