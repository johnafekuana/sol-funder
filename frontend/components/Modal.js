import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Modal = ({ modalOpen, setModalOpen, children }) => {
    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <Transition appear show={modalOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
            >
                <div className="flex items-center justify-center min-h-screen px-4">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-500"
                        enterFrom="-translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition-all ease-in-out duration-500"
                        leaveFrom="translate-y-0"
                        leaveTo="-translate-y-full"
                    >
                        <div className="z-50 p-4 bg-white rounded-lg shadow-xl w-full md:w-2/3 lg:w-1/2">
                            <div className="text-right">
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-2">{children}</div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal
