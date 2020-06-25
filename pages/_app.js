import Head from 'next/head'
import Footer from '../components/Organisms/Footer'

import '../styles/global.scss'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default App