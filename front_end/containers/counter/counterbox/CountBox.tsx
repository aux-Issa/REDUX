import * as React from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import rootReducer from '../../../modules/reducers/index';
import store from '../../../modules/Store';
import {RootStore} from '../../../modules/Store';
import {Count, CounterReducer} from '../../../modules/reducers/Reducers';
import { push } from 'connected-react-router'
import { Dispatch } from 'redux';
import {useState} from 'react';
// import {Header} from '../Header';
import Add from './Add';
import Reduce from './Reduce';
import {increment, decrement ,change} from '../../../modules/actions/ActionCreater';
import { Store } from 'redux';
import App from 'front_end/App';
import {ActionTypes, AuthenticateActionTypes, LogoutActionTypes} from "../../../modules/actions/ActionTypes"
import {logout} from "../../../modules/actions/ActionCreater";


// const Counter: React.FC = () => 
export default function Counter() 
    {
    const counter = useSelector((state:any)=>state.counter)
    console.log(counter)
    const dispatch = useDispatch();
    const gotoHistory:any = ()=> { 
        dispatch(push("/login")); 
    }
    const Logout = ()=> { 
        dispatch(logout); 
        dispatch(push("/login")); 
    }
    const [isIncrement, setIncrement] = useState('');

    return(
        <div>
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
// export default Counter