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
        <meta property="og:description" content="Um desenvolvedor apaixonado por tecnologia e inovação" />
        <meta property="og:image" content="https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/104884352_3287815077909945_6267769813415984483_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeF9kXNp2S_5_T4hrUpLoqEMd-qDuY6LmfF36oO5jouZ8bCNgiqJpsUkrteTY-THXKonv53gaefOnUtU5KlzyJ-c&_nc_oc=AQmiiE10jBQinWfDQP-m7CP43Jkca7tt8UTxf-IwNDRGDgsbnF8IiwDSmzpto92MiRNdlry9AL0u-dQOqbUEh0id&_nc_ht=scontent.fcgh9-1.fna&oh=1431aa2fe4c795f4c34fde1d0dafc17b&oe=5F1A5D24" />
      </Head>

      <main>

        <div className={styles['presentation-container']}>
          <div>
            <h1 className="text-center" style={{ fontSize: '3rem' }}>
              olá, eu sou o Bruno Anken
            </h1>

            <p className={`${styles['main-text']} text-center padding`}>
              tenho 25 anos, moro em São Paulo, sou engenheiro de software/desenvolvedor por profissão,
              engenheiro de computação por formação e músico por hobby.
            </p>

            <p className={`${styles['main-text']} text-center `}>
              atuo com desenvolvimento full-stack e tenho uma intimidade especial com o front-end.
            </p>
          </div>

          <div className={`padding ${styles['picture-container']}`}>
            <img src="/images/profile.jpg" alt="Eu, Bruno Anken" className={`${styles['avatar']} round-border`} />
          </div>

        </div>

        <div className="padding text-center bg-magenta1">

          <h2 style={{ fontSize: '2rem' }}>o quê posso te oferecer?</h2>
          <br />
          <p style={{ fontSize: '1.5rem' }}>olha só:</p>

          <div className={styles['sections-grid']}>

            <Section imgSrc="/icons/monitor-white.svg">
              <p className="color-white1">
                desenvolvimento front-end
              </p>
              <br />
              <p>
                além de HTML e CSS também manjo de React, Vue, SASS e de CSS-in-JS
                com styled-components e CSS Modules
              </p>
            </Section>

            <Section imgSrc="/icons/code-white.svg">
              <p className="color-white1">
                desenvolvimento back-end
              </p>
              <br />
              <p>
                sei fazer APIs em NodeJS, Python e Golang e já trabalhei com serverless
                e microserviços
              </p>
            </Section>

            <Section imgSrc="/icons/smartphone-white.svg">
              <p className="color-white1">
                desenvolvimento mobile
              </p>
              <br />
              <p>
                sei fazer aplicativos móveis para Android e iOS com React Native e já
                fiz releases tanto na Play Store quanto na App Store
              </p>
            </Section>

          </div>
        </div>

      </main>
    </div>
  )
}
