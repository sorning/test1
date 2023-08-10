'use client'

import { useCookies } from "react-cookie"

export default function Mycookie() {
    const [cookies, setCookie] = useCookies(['cartId'])
    const mycookievalue=cookies.cartId

    // const handleSetCookie=()=>{
    //     setCookie('cartId','cartIdValue',{path:'/'})
    // }
    return (
        <>
            <p>my cookie: {mycookievalue}</p>
            {/* <button onClick={handleSetCookie}>Set new cookie</button> */}
        </>
    )
}