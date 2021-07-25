import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import {increment,change} from '../../../modules/actions/ActionCreater';

export default function Add() {
    const counter = useSelector((state:any)=>state.counter)
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
        console.log(counter)
    }
    const handleChange = () => {
        dispatch(change());
        console.log(counter)
    }
    return(    
        <div>
            <span>ADD</span>
            <button onClick={handleIncrement}>+</button>
            <br/>
            <button onClick={handleChange}>引き算ボタンを出現させるにゃー</button>
        </div>)
}