import { useContext } from "react";
import Context from "../Context";

export default function useAuth() {
    const { authenticated, roles, setAuthorize } = useContext(Context);
    return { authenticated, roles, setAuthorize };
}