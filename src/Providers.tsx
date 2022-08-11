import { Store } from '@reduxjs/toolkit'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'utils/web3React'
import { Provider } from 'react-redux'
import React from 'react'

const Providers: React.FC<
  { children: React.ReactNode, store: Store }
> = ({ children, store }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        {children}
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers