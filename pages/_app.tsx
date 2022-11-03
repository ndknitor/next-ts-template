import '../styles/Globals.css'
import type { AppProps } from 'next/app'
import Provider from '../shared/context/Provider';
import { AxiosInterceptor } from '../shared/components/AxiosInterceptor';
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <AxiosInterceptor>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </AxiosInterceptor>
    </Provider>
  )
}
