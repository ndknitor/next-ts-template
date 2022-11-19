import React, { PropsWithChildren } from 'react'
import useAuthorizeInit from '../../libs/hook/useAuthorizeInit'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }: PropsWithChildren) {
    useAuthorizeInit();
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout