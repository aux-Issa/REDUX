// import { fail } from 'assert';
import {Action} from 'redux';
//  actionを識別するtypeを定義する(カウンター，ログイン機構共にここ)
export const ActionTypes = {
    // 型エイリアス，string型を名前つきで定義できる
    increment: 'INCREMENT',
    decrement: 'DECREMENT',
    change: 'CHANGE',
    login: 'LOG_IN',
    fail: 'FAIL',
    logout: 'LOG_OUT',
} 

// カウンターに関するアクション/////////
// 定義したtypeを用いてアクションを定義
// extends???
interface incrementAction extends Action {
    type: typeof ActionTypes.increment,
}

interface decrementAction extends Action {
    type: typeof ActionTypes.decrement,
}
interface changeAction extends Action {
    type: typeof ActionTypes.change,
}
//　export typeで型エイリアスの定義とexportを同時にする
// incremetActionのtype(interface)がdecrementActionのtypeと共にCountActionTypesとしてexportされる
export type CountActionTypes = incrementAction | decrementAction | changeAction



/////////////// Loginに関するアクション///////////////////
interface login extends Action {
    type: typeof ActionTypes.login,
    // payload: any
    payload: {
        name: string,
        email: string,
        password: string,
    }
}
interface fail extends Action {
    type: typeof ActionTypes.fail,
    payload: any
}
interface logout extends Action {
    type: typeof ActionTypes.logout,
    payload: any
}

export type AuthenticateActionTypes = login | fail | logout

