import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/Global'
import '../styles/globals.sass'
import Providers from '../Providers'
import { store } from '../state/index'
import { MainLayout } from '../components/Layout/MainLayout'
import Web3ReactManager from '../components/Web3ReactManager/Index'

import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fontsource/montserrat'
config.autoAddCss = false

function MyApp(props: AppProps) {
  return (
    <Providers store={store}>
      <GlobalStyle />
      <App {...props}/>
    </Providers>
  )
}

function App({ Component, pageProps }: AppProps) {
  
  return (
    <Web3ReactManager>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Web3ReactManager>
  )
}

export default MyApp
