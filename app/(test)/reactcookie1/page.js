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
            <p>hi</p>
            <p>git branch dev</p>
            <h1>git branch dev pull</h1>
            <p>hello</p>
            {/* <button onClick={handleSetCookie}>Set new cookie</button> */}
        </>
    )
}
