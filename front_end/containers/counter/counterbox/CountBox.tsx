import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import {useState} from 'react';
import Add from './Add';
import Reduce from './Reduce';
import {logout} from "../../../modules/actions/ActionCreater";
import Header from '../Header';


// const Counter: React.FC = () => 
export default function Counter() 
    {
    const counter = useSelector((state:any)=>state.counter)
    console.log(counter)
    const dispatch = useDispatch();
    const gotoHistory:any = ()=> { 
        dispatch(push("/history")); 
    }
    const Logout = ()=> { 
        dispatch(logout()); 
        dispatch(push("/login")); 
    }
    const [isIncrement, setIncrement] = useState('');

    return(
        <div>
            <Header />
            {counter.increment? (
                <Add />
            ) : (
                <Reduce />
            )} 
            <br/>
            <button onClick={gotoHistory}>履歴ページ</button>
            <br/>
            <button onClick={Logout}>ログアウト</button>               
        </div>    
    )
}
