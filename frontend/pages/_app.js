import Head from 'next/head'
import '../styles/globals.css'
import WalletConnectionProvider from '../context/WalletConnectionProvider'




function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<title>Sol-Funder</title>
			</Head>
			<WalletConnectionProvider>
				<Component {...pageProps} />
			</WalletConnectionProvider>	
		</>
	)
}

export default MyApp
