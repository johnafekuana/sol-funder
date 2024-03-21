const Action = ({ setModalOpen }) => {
    const onNewTransaction = () => {
        setModalOpen(true)
    }

    return (
        <div>
            <button onClick={onNewTransaction} className="w-full rounded-lg bg-[#fff] py-3 hover:bg-opacity-90">
                <span className="font-medium text-[#2563EB]">Send</span>
            </button>
        </div>
    )
}

export default Action
