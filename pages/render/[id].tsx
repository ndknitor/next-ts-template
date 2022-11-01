import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Authorize from '../../libs/Authorize';

function Render() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Authorize>
      <Head>
        <title>About</title>
        <meta name='description' content='this is about page' />
      </Head>
      <>
        <h1>{id}</h1>
        <Link href={'/'}>Index</Link>
        <br />
        <Link href={`${router.asPath}1`}>test navigation</Link>
      </>
    </Authorize>
  )
}

export default Render