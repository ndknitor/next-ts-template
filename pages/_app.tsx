import '../styles/Globals.css'
import type { AppProps } from 'next/app'
import Provider from '../shared/context/Provider';
import { AxiosInterceptor } from '../shared/components/AxiosInterceptor';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <AxiosInterceptor>
        <Component {...pageProps} />
      </AxiosInterceptor>
    </Provider>
  )
}
