import Modal from '../Modal'
import { createQR, encodeURL, findReference, validateTransfer, FindReferenceError, ValidateTransferError } from "@solana/pay"
import { PublicKey, Keypair } from '@solana/web3.js';
import BigNumber from 'bignumber.js';
import { useConnection } from '@solana/wallet-adapter-react';
import { useEffect, useRef, useState } from 'react';
import { truncate } from "../../utils/string";
import { useSolTip } from '../../hooks/soltip';
import { getAvatarUrl } from '../../functions/getAvatarUrl';




const TransactionQRModal = ({ modalOpen, setModalOpen, userAddress, setQrCode }) => {
	const {transactions, setTransactions} = useSolTip()

	const qrRef = useRef()
	const connection = useConnection()

	// Set the state to true to rerender the component with generated QR
	const loadQr = () => {
		setQrCode(true)
	}

	useEffect(()=>{

		const recipient = new PublicKey(userAddress)
		const amount = new BigNumber("0.1")
		const reference = Keypair.generate().publicKey
		const label = "My nice cookies"
		const message = "Thank you for sending!"

		const urlParams = {
			recipient,
			amount,
			reference,
			label,
			message
		}
		const url = encodeURL(urlParams)
		const qr = createQR (url, 400, 'white','#7ac1e0')

		if(qrRef.current){
			qrRef.current.innerHTML = ''
			qr.append(qrRef.current)
		}

		const interval = setInterval(async()=>{
			console.log("waiting for transaction");
			try {
				const signatureInfo = await findReference(connection, reference, {finality: 'confirmed'})
				console.log("validating");
				await validateTransfer(
					connection,
					signatureInfo.signature,
					{
						recipient,
						amount,
						reference,
					},
					{commitment: 'confirmed'}
				)

					//add transaction to local storage
				const newTransaction = {
					id: transactions.length.toString(),
					from: {
						name: recipient,
						handle: recipient,
						avatar: getAvatarUrl(receiver.toString()),
						verified: true,
					},
					to: {
						name: reference,
						handle: '-',
						avatar: getAvatarUrl(reference.toString()),
						verified: false,
					},
					description: "user sent you SOL",
					transactionDate: new Date(),
					status: 'Completed',
					amount: amount,
					source: '-',
					identifier: '-',
				};
				setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
				setModalOpen(false)

				clearInterval(interval)

			} catch (error) {
				if (error instanceof FindReferenceError){
					return
				}
				if (error instanceof ValidateTransferError){
					console.error('Transaction is invalid', error)
					return 
				}
				console.error('Unknown error', error)

				clearInterval(interval)
			}
		}, 500)

		return ()=> clearInterval(interval)
	})

	return (
		<Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
			<div >
				<div className="flex flex-col items-center justify-center space-y-1">
					<div ref={qrRef} />
				</div>

				<div className="flex flex-col items-center justify-center space-y-1">
					<p className="text-lg font-medium text-gray-800">{truncate(userAddress)}</p>

					<p className="text-sm font-light text-gray-600">Scan to pay ${truncate(userAddress)}</p>

					<button onClick={() => loadQr()} className="w-full rounded-lg bg-[#7ac1e0] py-3 hover:bg-opacity-70 outline-none">
						<span className="font-medium text-white">Load QR code</span>
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default TransactionQRModal
