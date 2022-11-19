import { useContext } from "react";
import { AuthorizeContext } from "../AuthorizeProvider";

export default function useAuth() {
    const { authenticated, roles, setAuthorize } = useContext(AuthorizeContext);
    return { authenticated, roles, setAuthorize };
}