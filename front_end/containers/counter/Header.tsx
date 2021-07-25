import {  useSelector } from 'react-redux';
import * as React from 'react';
export default function Header() {
    const userInfo = useSelector((state: any)=>state.auth)
    const counter = useSelector((state: any)=>state.counter)
    return(    
        <div>
            <p>user name: {userInfo.name}</p>
            <p>count number: {counter.value}</p>
        </div>)

}
