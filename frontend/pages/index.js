import { useState, useEffect } from 'react'
import Action from '../components/header/Action'
import NavMenu from '../components/header/NavMenu'
import Profile from '../components/header/Profile'
import SearchBar from '../components/home/SearchBar'
import NewTransactionModal from '../components/transaction/NewTransactionModal'
import TransactionsList from '../components/transaction/TransactionsList'
import { useWallet } from '@solana/wallet-adapter-react'
import TransactionQRModal from '../components/transaction/TransactionQRModal'
import { getAvatarUrl } from "../functions/getAvatarUrl"
import { useSolTip } from '../hooks/soltip';



const Home = () => {
const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false)

const [qrCode, setQrCode] = useState(false)

const { 
		connected, 
		publicKey, 
		avatar, 
		userAddress, 
		transactions , 
		newTransactionModalOpen, 
		setNewTransactionModalOpen
	} = useSolTip()

return (
	<div className="flex min-h-screen ">
		<main className="flex flex-1 flex-col">
			<h1 className='text-center font-bold text-xl font-poppins m-2 text-[#7ac1e0]'>SOL TIP</h1>
			<SearchBar />
			<TransactionsList connected={connected} transactions={transactions} />
		</main>

		<header className="flex w-[250px] flex-col bg-[#4f5d75] p-12 rounded-full">
			<Profile setModalOpen={setTransactionQRModalOpen} avatar={avatar} userAddress={userAddress} />
			<TransactionQRModal modalOpen={transactionQRModalOpen} setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} myKey={publicKey} setQrCode={setQrCode} />

			<NavMenu connected={connected} publicKey={publicKey} />

			<Action setModalOpen={setNewTransactionModalOpen} />
			<NewTransactionModal modalOpen={newTransactionModalOpen} setModalOpen={setNewTransactionModalOpen} />
		</header>

		
	</div>
)
}

export default Home
