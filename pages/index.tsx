import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import useAuth from '../libs/hook/useAuth';
import SignInRequest from '../objects/request/SignInRequest';
import Context from '../shared/context/Context';
import styles from '../styles/Index.module.css';

function Index() {
  const { setAuthorize, authenticated, roles } = useAuth();
  const [r, setR] = useState<string>("<srcipt>alert('dit me may')</srcipt>");
  const [request] = useState(new SignInRequest());
  const [key, setKey] = useState(0);
  const {count, setCount} = useContext(Context);
  useEffect(() => {
  }, []);

  return (
    <>
      <Head>
        <title>this is title</title>
        <meta name='description' content='this is index page'></meta>
      </Head>
      <>
        <div key={key}>
          <input type="text" defaultValue={request.email} onChange={e => request.email = e.target.value} />
          <p>{request.getMessage(() => request.email)}</p>
          <input type="text" defaultValue={request.password} onChange={e => request.password = e.target.value} />
          <p>{request.getMessage(() => request.password)}</p>
          <button onClick={async () => {
            await request.check(setKey);
          }}>Submit</button>
        </div>
      </>
      <>
        <h1 className={styles["red"]}>Index</h1>
        <h3>Authenticated : {authenticated.toString()}</h3>
        <h3>Roles : {roles.toString()}</h3>
        <button onClick={e => setAuthorize(["User"])}>Authorize</button>
        <br />
        <button onClick={e => setAuthorize(false)}>Unauthorize</button>
        <br />
        <input type="file" />
        <br />
        <Link href={'/about'}>About</Link>
        <br />
        <Link href={"/render/1"}>Render</Link>
        <h1>{r}</h1>
        <button onClick={() => setCount(count + 1)}>Increase counter</button>
        <button onClick={() => setCount(count - 1)}>Decrease counter</button>
        <h4>Count : {count}</h4>
      </>
    </>
  )
}

export default Index