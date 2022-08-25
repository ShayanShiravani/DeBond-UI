import React from 'react'
import { Flex } from 'rebass'
import dynamic from 'next/dynamic'
import { UnsupportedChainIdError } from '@web3-react/core'

import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { addRPC, shortenAddress } from '../../utils/wallet'
import { getValidChains } from '../../configs/constants/chains'
import { NameChainMap } from '../../configs/constants/chains'
const WalletModal = dynamic(() => import('../Modal/WalletModal'))

const AppInfo = styled(Flex)`
  .hide-on-mobile {
    @media (max-width: 576px) {
      display: none;
    }
  }
`

const Menu: React.FC<{selectedChain?: number}> = ({ selectedChain }) => {
  const { account, chainId, error, library } = useWeb3React()

  const [open, setOpen] = React.useState(false)

  function closeModal(): void {
    setOpen(false)
  }

  const handleConnect = async (): Promise<void> => {
    setOpen(true)
  }

  const validChains = getValidChains()
  const validChainId = selectedChain ? selectedChain : validChains[0]

  return (
    <>
      <AppInfo>
        <picture>
          <img width={"130px"} src={'/images/common/muon-logo.svg'} alt={'Logo'} />
        </picture>
      </AppInfo>
      <AppInfo>
        {account && chainId ? (
          validChains.includes(chainId) ? (
            <button
              className={'btn-small btn-primary-inverted mr-3'}
            >
              {shortenAddress(account)}
            </button>
          ) : (
            <button
              className="btn-secondary-inverted btn-small hidden sm:block sm:mr-3"
              onClick={() => addRPC(validChainId, library)}
            >
              Switch to {NameChainMap[validChainId]}
            </button>
          )
        ) : error instanceof UnsupportedChainIdError ? (
          <button
            className="hide-on-mobile btn-small btn-secondary-inverted hidden sm:block sm:mr-3"
            onClick={() => addRPC(validChainId, library)}
          >
            Switch to {NameChainMap[validChainId]}
          </button>
        ) : (
          <button
            className={'btn-small btn-primary-inverted mr-0 sm:mr-3'}
            onClick={handleConnect}
          >
            Connect Wallet
          </button>
        )}

        {chainId && validChains.includes(chainId) && NameChainMap[chainId] && (
          <button
            className="hide-on-mobile btn-small btn-primary-inverted"
          >
            Network:
            <span className={'pl-2 font-semibold'}>{NameChainMap[chainId] || 'NaN'} </span>
          </button>
        )}
        {((chainId && !validChains.includes(chainId) && account) ||
          error instanceof UnsupportedChainIdError) && (
          <button className={'btn-small status-red cursor-default'}>Wrong Network</button>
        )}
      </AppInfo>
      <WalletModal closeModal={closeModal} open={open} hide={() => setOpen(!open)} />
    </>
  )
}

export default Menu
