import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { push } from 'connected-react-router'

export default function History() {
    const history = useSelector((state:any)=>state.counter.history)
    const dispatch = useDispatch();
    const gotoCounter:any = ()=> { 
        dispatch(push("/counter")); 
    }
    return(    
        <div>
            {history.map((moment: string, index: number) => {
                return <p key={index}>{moment}</p>
                })}
            <button onClick={gotoCounter}>カウンター</button>
        </div>)
}