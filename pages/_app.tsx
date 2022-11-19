import '../styles/Globals.css'
import type { AppProps } from 'next/app'
import Provider from '../shared/context/Provider';
import { AxiosInterceptor } from '../shared/components/AxiosInterceptor';
import AuthorizeProvider from '../libs/AuthorizeProvider';
import Layout from '../shared/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthorizeProvider>
      <Provider>
        <AxiosInterceptor>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AxiosInterceptor>
      </Provider>
    </AuthorizeProvider>
  )
}
