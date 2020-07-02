import Head from 'next/head'

import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Footer from 'components/Organisms/Footer'

import '../styles/global.scss'

const App: React.FunctionComponent<AppPropsType> = ({ Component, pageProps }: AppPropsType) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet" />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
    <Footer />
  </>
)

export default App
