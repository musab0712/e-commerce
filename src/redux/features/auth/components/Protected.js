import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import Link from "next/link";

export function Protected({children}) {
    const user = useSelector(selectLoggedInUser);

    if(!user){
        return <Link href='/login' replace={true}></Link>
    }
    return children;
}