import { PropsWithChildren } from 'react'
import useAuth from '../context/hook/useAuth';

function NonAuthorizeView(props:PropsWithChildren<{}>) {
    const {authenticated} = useAuth();
  return (
    authenticated ? null :
    props.children
  )
}

export default NonAuthorizeView