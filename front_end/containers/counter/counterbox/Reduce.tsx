import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import {decrement,change} from '../../../modules/actions/ActionCreater';

export default function Reduce() {
    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleChange = () => {
        dispatch(change())
    }
    return(    
        <div>
            <span>Reduce</span>
            <button onClick={handleDecrement}>-</button>
            <br/>
            <button onClick={handleChange}>足し算ボタンを出現させるにゃー</button>
        </div>)
}