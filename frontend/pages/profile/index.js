import { useState, useEffect } from 'react'
import Action from '../../components/header/Action'
import NavMenu from '../../components/header/NavMenu'
import Profile from '../../components/header/Profile'
import SearchBar from '../../components/home/SearchBar'
import NewTransactionModal from '../../components/transaction/NewTransactionModal'
import TransactionsList from '../../components/transaction/TransactionsList'
import { useWallet } from '@solana/wallet-adapter-react'
import TransactionQRModal from '../../components/transaction/TransactionQRModal'
// import { getAvatarUrl } from "../functions/getAvatarUrl"
import { useSolTip } from '../../hooks/soltip'
import Link from 'next/link'



const UserProfile = () => {
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
			<h2 className='text-center font-bold text-4xl cursor-pointer font-poppins m-2 blue--span' >
				<Link href='/'>
					SOL-FUNDER
				</Link>
			</h2>
			<SearchBar />
			<TransactionsList connected={connected} transactions={transactions} />
		</main>

		<header className="flex w-[250px] flex-col bg-[#2563EB] p-12 rounded-full mr-2 my-2">
			<Profile setModalOpen={setTransactionQRModalOpen} avatar={avatar} userAddress={userAddress} />
			<TransactionQRModal modalOpen={transactionQRModalOpen} setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} myKey={publicKey} setQrCode={setQrCode} />

			<NavMenu connected={connected} publicKey={publicKey} />

			<Action setModalOpen={setNewTransactionModalOpen} />
			<NewTransactionModal modalOpen={newTransactionModalOpen} setModalOpen={setNewTransactionModalOpen} />
		</header>

		
	</div>
)
}

export default UserProfile
