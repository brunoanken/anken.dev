import Head from 'next/head'
import { AppProps } from 'next/app'

import Footer from '../components/Organisms/Footer'

import '../styles/global.scss'
import { NextComponentType } from 'next'

type Props = {
    Component: NextComponentType,
    pageProps: object
}

const App: React.FunctionComponent<Props> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
)

export default App
