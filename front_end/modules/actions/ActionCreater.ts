import { ActionTypes } from "./ActionTypes"
import {CountActionTypes, AuthenticateActionTypes} from "./ActionTypes"
import axios from 'axios'
import { push } from 'connected-react-router'
import { Dispatch } from 'redux';
// Counterに関するActionを作成

export const increment = () :CountActionTypes => {
    console.log("increment送ります");
    return{
        type: ActionTypes.increment
    }};
        
export const decrement = () :CountActionTypes=> {
    return{
        type: ActionTypes.decrement
    }
}
export const change = () :CountActionTypes=> {
    console.log("changeをdispatchしてる")
    return{
        type: ActionTypes.change
    }
}

// ログイン機構に関するActionを作成
export const logout = () :AuthenticateActionTypes => {
    console.log("logoutをdispatchしてる");
    return {
        type: ActionTypes.logout,
        payload: ""
    }
}
// loginをトライして成功すればtype"LOGIN"且ページ遷移, 失敗すれば"FAIL"
export const tryLogin = (email: string, password: string) => async(dispatch: Dispatch) => {
    try{
        dispatch(push('/counter'))

        const res = await axios.post(`http://localhost:3000/v1/users/signin`, {email, password})
        console.log(res.data);
        dispatch({
            type: ActionTypes.login,
            payload: res.data
        })
        dispatch(push('/counter'))
        //// 修正要
    } catch(e) {
        console.log("ERROR!!");
        dispatch({
            type: ActionTypes.fail
        })
        dispatch(push('/'))
    };
}



