const Action = ({ setModalOpen }) => {
    const onNewTransaction = () => {
        setModalOpen(true)
    }

    return (
        <div>
            <button onClick={onNewTransaction} className="w-full rounded-lg bg-[#7ac1e0] py-3 hover:bg-opacity-70">
                <span className="font-medium text-white">Send</span>
            </button>
        </div>
    )
}

export default Action
