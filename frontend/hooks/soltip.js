import { useState, useEffect } from "react";
import { getAvatarUrl } from "../functions/getAvatarUrl";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { 
	clusterApiUrl, 
	Connection, 
	Keypair, 
	LAMPORTS_PER_SOL, 
	PublicKey, 
	SystemProgram, 
	Transaction 
} from "@solana/web3.js";
import BigNumber from "bignumber.js";
import { lamports } from "@metaplex-foundation/umi";

export const useSolTip = () => {
	const [avatar, setAvatar] = useState("")
	const [userAddress, setUserAddress] = useState("11111111111111111111111111111111")
	const [amount, setAmount] = useState(0)
	const [receiver, setReceiver] = useState('')
	const [transactionPurpose, setTransactionPurpose] = useState('')
	const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

	const {connected, publicKey, sendTransaction} = useWallet()
	const { connection } = useConnection()

	// Local storage setup
	const useLocalStorage = (storageKey, fallbackState) => {
		const [value, setValue] = useState(() => {
			if (typeof window !== 'undefined') {
				const storedValue = localStorage.getItem(storageKey);
				return storedValue ? JSON.parse(storedValue) : fallbackState;
			}
			return fallbackState;
		});

		useEffect(() => {
			if (typeof window !== 'undefined') {
				localStorage.setItem(storageKey, JSON.stringify(value));
			}
		}, [storageKey, value]);

		return [value, setValue];
	}

	const [transactions, setTransactions] = useLocalStorage("transactions", [])
	


	useEffect(() => {
		if (connected) {
			setAvatar(getAvatarUrl(publicKey.toString()))
			setUserAddress(publicKey.toString())
		}
	}, [connected])

	const makeTransaction = async (fromWallet, toWallet, amount, reference) => {
		const network = "devnet";
		const endpoint = clusterApiUrl(network);

		const connection = new Connection(endpoint)

		// Get blockhash
		const { blockhash } = await connection.getLatestBlockhash('finalized')

		const transaction = new Transaction({
				recentBlockhash: blockhash,
				feePayer: fromWallet
		})

		// Transfer instruction - from sender to receiver
		const transferInstruction = SystemProgram.transfer({
				fromPubkey: fromWallet,
				lamports: amount.multipliedBy(LAMPORTS_PER_SOL).toNumber(),
				toPubkey: toWallet
		})

		transferInstruction.keys.push({
				pubkey: reference,
				isWritable: false,
				isSigner: false,
		})

		transaction.add(transferInstruction)

		return transaction
	}

	// Function to run transaction
	const doTransaction = async ({ amount, receiver, transactionPurpose }) => {
		const fromWallet = publicKey
		const toWallet = new PublicKey(receiver)
		const bnAmount = new BigNumber(amount)
		const reference = Keypair.generate().publicKey

		const transaction = await makeTransaction(fromWallet, toWallet, bnAmount, reference)

		const txHash = await sendTransaction(transaction, connection)
		console.log(txHash);

		//transaction history object
		// const newTransaction = {
		// 	id: transactions.length.toString(),
		// 	from: {
		// 		name: publicKey,
		// 		handle: publicKey,
		// 		avatar: avatar,
		// 		verified: true,
		// 	},
		// 	to: {
		// 		name: receiver,
		// 		handle: '-',
		// 		avatar: getAvatarUrl(receiver.toString()),
		// 		verified: false,
		// 	},
		// 	description: transactionPurpose,
		// 	transactionDate: new Date(),
		// 	status: 'Completed',
		// 	amount: amount,
		// 	source: '-',
		// 	identifier: '-',
		// };
		// setNewTransactionModalOpen(false)
		// setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);

		const newID = (transactions.length + 1).toString()
		const newTransaction = {
			id: newID,
			from : {
				name: publicKey,
				handle: publicKey,
				avatar: avatar,
				verified: true,
			},
			to: {
				name: receiver,
				handle: '-',
				avatar: getAvatarUrl(receiver.toString()),
				verified: false,
			},
			description: transactionPurpose,
			transactionDate: new Date(),
			status: 'Completed',
			amount: amount,
			source: '-',
			identifier: '-',
		}
		setNewTransactionModalOpen(false)
		setTransactions( [newTransaction, ...transactions]);
	}

	return {
			connected, publicKey, avatar, userAddress, doTransaction,
			amount, setAmount, receiver, setReceiver, transactionPurpose, setTransactionPurpose,
			transactions, setTransactions,
			newTransactionModalOpen, setNewTransactionModalOpen
	}
}

