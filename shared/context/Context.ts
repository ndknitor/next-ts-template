import { createContext, Dispatch, SetStateAction, useState } from "react"
export class Store {
    initLoading: boolean = true;
    setInitLoading: Dispatch<SetStateAction<boolean>> = () => { };

    authenticated: boolean = false;
    roles: string[] = [];
    setAuthorize : (scheme: string[] | boolean) => void = () => {};
}
export const useProvider: () => Store = () => {
    const [initLoading, setInitLoading] = useState<boolean>(true);
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [roles, setRoles] = useState<string[]>([]);
    const setAuthorize = (scheme: string[] | boolean) => {
        if (!(typeof scheme == "boolean")) {
            setAuthenticated(true);
            setRoles(scheme);
        }
        else
        {
            setAuthenticated(scheme);
            setRoles([]);
        }
    }
    return {
        initLoading,
        setInitLoading,

        authenticated,
        roles,
        setAuthorize
    };
}
const Context = createContext<Store>(new Store());
export default Context;