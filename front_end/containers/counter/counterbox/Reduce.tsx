import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import {decrement,change} from '../../../modules/actions/ActionCreater';
// class Reduce extends React.Component{
//    public dispatch = useDispatch();
//    public handleIncrement = () => {
//     this.dispatch(decrement)
// }
//     public handleChange = () => {
//    this.dispatch(change)
// }
//    render(){
//    return(    
//        <div>
//            <span>ADD</span>
//            <button onClick={this.handleIncrement}>+</button>
//            <br/>
//            <button onClick={this.handleChange}>引き算ボタンを出現させるにゃー</button>
//        </div>)}
// }
// export default Reduce

export default function Reduce() {
    const counter = useSelector((state:any)=>state.counter)
    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(decrement)
    }
    const handleChange = () => {
        dispatch(change)
    }
    return(    
        <div>
            <p>{counter.value}</p>
            <span>Reduce</span>
            <button onClick={handleDecrement}>-</button>
            <br/>
            <button onClick={handleChange}>足し算ボタンを出現させるにゃー</button>
        </div>)
}