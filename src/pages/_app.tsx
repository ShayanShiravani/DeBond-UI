import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyle from 'styles/Global'
import Providers from 'Providers'
import { store } from 'state'
import { MainLayout } from 'components/Layout/MainLayout'

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
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
