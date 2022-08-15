import type { AppProps } from 'next/app'
import GlobalStyle from 'styles/Global'
import '../styles/globals.sass'
import Providers from 'Providers'
import { store } from 'state'
import { MainLayout } from 'components/Layout/MainLayout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fontsource/montserrat'
import Web3ReactManager from 'components/Web3ReactManager/Index'

function MyApp(props: AppProps) {
  config.autoAddCss = false
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
