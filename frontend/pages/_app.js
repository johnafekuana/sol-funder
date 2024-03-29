import Head from 'next/head'
import '../styles/globals.css'
import WalletConnectionProvider from '../context/WalletConnectionProvider'




function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
				<title>SolFunder</title>
			</Head>
			<WalletConnectionProvider>
				<Component {...pageProps} />
			</WalletConnectionProvider>	
		</>
	)
}

export default MyApp
