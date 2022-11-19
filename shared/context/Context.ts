import { createContext, Dispatch, SetStateAction, useState } from "react"
export class Store {
    count : number = 0;
    setCount : Dispatch<SetStateAction<number>> = () => { };
}
export const useProvider: () => Store = () => {
    const [count, setCount] = useState(0);
    return {
        count,
        setCount
    };
}
const Context = createContext<Store>(new Store());
export default Context;