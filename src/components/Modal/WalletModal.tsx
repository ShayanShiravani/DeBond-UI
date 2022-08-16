import React from 'react'
import { Flex } from 'rebass'
import { useWeb3React } from '@web3-react/core'
import Modal from './Index'
import { connectorsByName } from '../../configs/constants/connectors'

export interface WalletModalType {
  open: boolean,
  hide: any,
  closeModal: any
}

const WalletModal: React.FC<React.PropsWithChildren<WalletModalType>> = (props) => {
  const { open, hide, closeModal } = props

  const { activate } = useWeb3React()
  return (
    <Modal closeModal={closeModal} open={open} title="Connect Wallet">
      {Object.keys(connectorsByName).map((name) => {
        return (
          <div
            className={'btn-primary-inverted rounded-xl mb-2 py-3 cursor-pointer'}
            key={name}
            onClick={() => {
              localStorage.setItem('walletIsConnected', 'true')
              localStorage.setItem('walletType', name)
              activate(connectorsByName[name], undefined, true).catch(() => {
                localStorage.removeItem('walletIsConnected')
                localStorage.removeItem('walletType')
              })
              hide()
            }}
          >
            <Flex padding="0 20px" justifyContent="space-between" width="100%" alignItems="center">
              {name}
              <div className={'bg-white rounded-full p-2 shadow-xl flex justify-center items-center'}>
                {' '}
                <picture>
                  <img className={'h-6 w-6'} src={`/images/common/${name}.svg`} alt={name}/>
                </picture>
              </div>
            </Flex>
          </div>
        )
      })}
    </Modal>
  )
}

export default WalletModal
