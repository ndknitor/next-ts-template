import { useRouter } from 'next/router';
import React, { PropsWithChildren, useContext, useEffect} from 'react'
import { forbiddenRedirect } from '../utils/Redirect';
import Context from '../shared/context/Context'
interface Props extends PropsWithChildren {
    forbiddenRedirect: string;
}
function NonAuthorize(props: Props) {
    const { authenticated, initLoading } = useContext(Context);
    const { replace } = useRouter();
    useEffect(() => {
        if (!initLoading) {
            if (authenticated) {
                replace(props.forbiddenRedirect || forbiddenRedirect)
            }
        }
    }, [initLoading]);
    return (
        !initLoading ?
            authenticated ?
                null
                :
                <>{props.children}</>
            :
            null
    )
}

export default NonAuthorize