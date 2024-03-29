import { useState } from 'react'
import Modal from '../Modal'
import { useSolTip } from '../../hooks/soltip'


const NewTransactionModal = ({ modalOpen, setModalOpen }) => {

    const { amount, setAmount, receiver, setReceiver, transactionPurpose, setTransactionPurpose, doTransaction } = useSolTip()

    const onAmountInput = (e) => {
        e.preventDefault()
        const newAmount = e.target.value

        setAmount(newAmount)

        const input = document.querySelector('input#amount')
        input.style.width = newAmount.length + 'ch'
    }

    const onPay = async () => {
        // Pay and add transaction funcationallity goes here!
        await doTransaction({ amount, receiver, transactionPurpose })
        // Clear states
        setModalOpen(false)
        setAmount(0)
        setReceiver("")
        setTransactionPurpose("")
    }

    return (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
					<div className="relative flex flex-col items-center justify-center space-y-8">
						<div className="flex items-center justify-center text-center text-7xl font-semibold text-[#2563EB]">
							<input className="w-12 outline-none" id="amount" name="amount" type="number" value={amount} onChange={onAmountInput} min={0} />
							<label htmlFor="amount">$SOL</label>
						</div>

						<div className="flex w-full flex-col space-y-2">
							<div className="animate-pulse flex rounded-lg border border-gray-200 p-4">
								<label className="text-gray-600" htmlFor="receiver">
										To:
								</label>
								<input className="w-full pl-2 font-medium text-gray-600 placeholder-gray-600 outline-none" id="receiver" name="receiver" type="text" placeholder="Recipient's Address" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
							</div>

							<div className="animate-pulse flex rounded-lg border border-gray-200 p-4">
								<label className="text-gray-600" htmlFor="transactionPurpose">
									Purpose:
								</label>
								<input className="w-full pl-2 font-medium text-gray-600 placeholder-gray-600 outline-none" id="transactionPurpose" name="transactionPurpose" type="text" placeholder="Tip, Rent, etc." value={transactionPurpose} onChange={(e) => setTransactionPurpose(e.target.value)} />
							</div>
						</div>

						<div className="flex w-full space-x-1">
							<button onClick={onPay} className="w-full rounded-lg bg-[#2563EB] py-3 px-12 text-white hover:bg-opacity-70">
								Pay
							</button>
						</div>
					</div>
        </Modal>
    )
}

export default NewTransactionModal
