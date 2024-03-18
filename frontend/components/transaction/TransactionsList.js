import { useMemo, useState } from 'react'
import TransactionDetailModal from './TransactionDetailModal'
import TransactionItem from './TransactionItem'


const dropdownIcon = '/dropdown-icon.ico';


const TransactionsList = ({ transactions }) => {
	
	const [modalOpen, setModalOpen] = useState(false)
	const [currentTransactionID, setCurrentTransactionID] = useState(null)
	const currentTransaction = useMemo(() => transactions.find((transaction) => transaction.id === currentTransactionID), [currentTransactionID])

	const toggleTransactionDetailModal = (value, transactionID) => {
			setCurrentTransactionID(transactionID)
			setModalOpen(value)
	}

	return (
		<div>
			<div className="rounded-full bg-[#2563EB] pb-4 pt-4 mx-2">
				<p className=
						"font-poppins flex items-center justify-center mx-auto max-w-3xl px-10 text-sm font-medium uppercase text-[#fff] xl:px-0"
					>Donations <span className="ml-2"><img src={dropdownIcon} alt="Icon" className="w-5 h-5" style={{ filter: 'invert(1)' }} /></span>
				</p>
			</div>

			<div className='campaign-description text-center text-xs  mx-80 rounded-lg mt-2 bg-[#fff] text-[#2563EB] p-4'>

				<p className='animate-bounce'>
					Hey guys, I am currently raising funds for my rent. <br/>
					Thank you.
				</p>

			</div>

			<div className="mx-auto max-w-3xl divide-y divide-gray-100 py-4 px-10 xl:px-0 bg-gray-100 mt-2 rounded-lg animate-pulse-bg">
				{transactions.map(({ id, to, amount, description, transactionDate }) => (
					<TransactionItem key={id} id={id} to={to} description={description} transactionDate={transactionDate} amount={amount} toggleTransactionDetailModal={toggleTransactionDetailModal} />
				))}

				<TransactionDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} currentTransaction={currentTransaction} />
			</div>
		</div>
	)
}

export default TransactionsList
