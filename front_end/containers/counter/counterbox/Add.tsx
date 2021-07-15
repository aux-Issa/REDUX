import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import {Component} from 'react';
import {increment,change} from '../../../modules/actions/ActionCreater';

// class Add extends Component{
//      dispatch = useDispatch();
//  handleIncrement = () => {
//      this.dispatch(increment)
// }
//  handleChange = () => {
//     this.dispatch(change)
// }
//     render(){
//     return(    
//         <div>
//             <span>ADD</span>
//             <button onClick={this.handleIncrement}>+</button>
//             <br/>
//             <button onClick={this.handleChange}>引き算ボタンを出現させるにゃー</button>
//         </div>)}
// }
// export default Add;
export default function Add() {
    const counter = useSelector((state:any)=>state.counter)
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment);
        console.log(counter)
    }
    const handleChange = () => {
        dispatch(change);
        console.log(counter)
    }
    return(    
        <div>
            <p>{counter.value}</p>
            <span>ADD</span>
            <button onClick={handleIncrement}>+</button>
            <br/>
            <button onClick={handleChange}>引き算ボタンを出現させるにゃー</button>
        </div>)
}