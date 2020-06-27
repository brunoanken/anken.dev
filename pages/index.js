import Head from 'next/head'

import SectionCard from '../components/Molecules/SectionCard'
import CompanyCard from '../components/Molecules/CompanyCard'
import LinkButtonOutline from '../components/Atoms/LinkButtonOutline'
import ExternalLink from '../components/Atoms/ExternalLink'

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

        <section className={styles['presentation-container']}>
          <div>
            <h1 className="text-center" style={{ fontSize: '3rem' }}>
              Olá, eu sou o Bruno Anken
            </h1>

            <p className={`${styles['main-text']} text-center padding`}>
              Tenho 25 anos, moro em São Paulo, sou engenheiro de software por profissão,
              engenheiro de computação por formação e músico por hobby.
            </p>

            <p className={`${styles['main-text']} text-center `}>
              Atuo com desenvolvimento full-stack e tenho uma intimidade especial com o front-end.
            </p>
          </div>

          <div className={`padding ${styles['picture-container']}`}>
            <img src="/images/profile.jpg" alt="Eu, Bruno Anken" className={`${styles['avatar']} round-border`} onClick={() => console.log('8==D')} />
          </div>
        </section>

        <section className="padding text-center bg-magenta1">

          <h2 className="text-2rem">O quê posso te oferecer?</h2>
          <br />
          <p style={{ fontSize: '1.5rem' }}>Olha só:</p>

          <div className={styles['sections-grid']}>

            <SectionCard imgSrc="/icons/monitor-white.svg" title="Desenvolvimento front-end">
              <p>
                Além de HTML e CSS também manjo de React, SASS e de CSS-in-JS
                com styled-components e CSS Modules.
              </p>
            </SectionCard>

            <SectionCard imgSrc="/icons/code-white.svg" title="Desenvolvimento back-end">
              <p>
                Sei fazer APIs em NodeJS, Python e Golang. Já desenvolvi microserviços e
                estou acostumado a trabalhar com serverless.
              </p>
            </SectionCard>

            <SectionCard imgSrc="/icons/smartphone-white.svg" title="Desenvolvimento mobile">
              <p>
                Sei fazer aplicativos móveis para Android e iOS com React Native e já
                fiz releases tanto na Play Store quanto na App Store.
              </p>
            </SectionCard>

          </div>
        </section>

        <section className="text-center padding bg-green1 color-white3">

          <h2 className="text-2rem">Onde já trabalhei</h2>

          <div className={styles['company-cards-container']}>

            <div className={styles['company-card-container']}>
              <CompanyCard companyName='MedPass' companyImageSrc="https://www.medpass.com.br/static/media/logo.5fd7caf0.png" companyWebsiteUrl="https://www.medpass.com.br/">
                <p>Criei diversas APIs em NodeJS e principalmente em Golang, além de dar manutenção em várias outras feitas em Python, todas serverless. </p>
                <br />
                <p>Também participei ativamente da criação e melhoria do aplicativo móvel usando React Native e desenvolvi diversos front-ends com React e Vue.</p>
              </CompanyCard>
            </div>

            <div className={styles['company-card-container']}>
              <CompanyCard companyName='Acesso' companyImageSrc="//www.meuacesso.com.br/wp-content/uploads/2017/12/branding.svg" companyWebsiteUrl="https://www.medpass.com.br/">
                <p>Iniciei minha carreira como desenvolvedor participando da adição de novas funcionalidades em um microserviço C# utilizando .NET Core.</p>
                <br />
                <p>Posteriormente encabecei as demandas de front-end do squad utilizando React e continuei atuando com foco no front até me desligar da empresa.</p>
              </CompanyCard>
            </div>

            <div className={styles['company-card-container']} onClick={() => console.log('Edmar')}>
              <CompanyCard companyName='Unect Jr.' companyImageSrc="/images/unect.png" companyWebsiteUrl="https://www.medpass.com.br/">
                <p>Sou co-fundador e atuei como o primeiro presidente, ajudando o time de fundadores a criar o estatuto social e a suprir todas as demandas jurídicas para a correta fundação e operação da empresa júnior.</p>
                <br />
                <p>Fui o representante oficial em diversos eventos e internamente ajudei a coordenar a empresa de maneira geral, além de atuar como gerente de projetos em dado momento.</p>
              </CompanyCard>
            </div>

          </div>

        </section>

        <section className="padding text-center">
          <h2 className="text-2rem">E aí, curtiu?</h2>

          <div className={styles['motivational']}>

            <div>
              <p>
                Gosto mesmo de tecnologia e acredito em seu poder transformador e facilitador.
                Estou sempre atento a novas ferramentas e tendências e sempre procuro uma brecha para
                estudá-las, verificar e validar suas aplicabilidades.
              </p>
              <br />
              <p>
                No momento estou estudando NextJS (ao fazer este site!), Elixir e GraphQL.
              </p>
            </div>

            <div>
              <p>
                Você pode entrar em contato comigo através do e-mail <strong>brunoanken@gmail.com</strong>
              </p>
              <br />
              <p>
                Se preferir dê uma olhada no meu <ExternalLink href="https://www.linkedin.com/in/brunoanken/">LinkedIn</ExternalLink> ou
                baixe o meu currículo clicando no botão abaixo!
              </p>

              <div style={{ marginTop: '2rem', alignItems: 'center' }} className="column">
                <LinkButtonOutline download href="/files/brunoanken_cv.pdf"><strong>Baixar CV bonitão</strong></LinkButtonOutline>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}
