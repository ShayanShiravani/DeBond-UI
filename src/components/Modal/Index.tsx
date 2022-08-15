import React, { Fragment } from 'react'

import ReactModal from 'react-modal'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/pro-solid-svg-icons'

if (typeof window !== 'undefined') {
  ReactModal.setAppElement('body')
}

export interface ModalPropsType {
  open: boolean,
  closeModal: any,
  title: string
}

const Modal: React.FC<React.PropsWithChildren<ModalPropsType>> = (props) => {
  const {
    open,
    closeModal,
    title,
    children
  } = props

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {title && (
                    <Dialog.Title as="h3" className="relative text-lg font-medium leading-6 text-gray-900 mb-8">
                      {title}
                      <div onClick={closeModal} className={'absolute right-0 -top-2 p-2 cursor-pointer'}>
                        <FontAwesomeIcon style={{ fontSize: 20 }} className={''} icon={faXmark}></FontAwesomeIcon>
                      </div>
                    </Dialog.Title>
                  )}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
