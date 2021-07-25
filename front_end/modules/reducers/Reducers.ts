import {ActionTypes} from "../actions/ActionTypes";
import {CountActionTypes} from "../actions/ActionTypes"
import {AuthenticateActionTypes} from "../actions/ActionTypes"

//reducerに渡されるstateの型を設定
export type Count = {
    value : number,
    increment?: boolean,
    history: string[],
}
// 設定した型を用いて初期状態を記述
const initialCounterState: Count = {
    value: 0,
    increment: true,
    history: [],
};

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
//　Reducerは引数としてstateオブジェクト(変化前の状態)とactionオブジェクトを受け取る
// 戻り値としてstateオブジェクト（変化後の状態）を返す
export const CounterReducer = (state: Count = initialCounterState, action: CountActionTypes):Count => {
    switch (action.type){
        case ActionTypes.increment: {  
            return{
                ...state,
                value: state.value + 1,
                history: [...state.history, hour + "時" +minute + "分 足したにゃ" ]     
            }      
        };
        case ActionTypes.decrement: {
            return{ 
                ...state,
                value: state.value - 1,
                history: [...state.history, hour + "時" +minute + "分 引いたにゃ" ]     
            }};
        case ActionTypes.change: {
            //// stateのincrementブーリアンをチェンジ
            console.log(state.value)
            return {
                ...state,
                increment: !state.increment,
            }};
        default:
            console.log("counterreducerです") 
             return state   
      }     
    }
////// ログイン機構に関するreducer /////////////////
type Auth = {
    name: string,
    email: string,
    password: string,
    isLoggedIn: boolean,
}

const initialAuthState = {
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
}

export const AuthenticateReducer = (state:Auth = initialAuthState, action: AuthenticateActionTypes) => {
    switch (action.type) {
        case ActionTypes.logout: {
            return{
                ...state,
                name: "",
                email: "",
                password: "",
                isLoggedIn: false    
            }      
        }
        case ActionTypes.login: {
            if (Object.keys(action.payload).length === 3 ){
                return {
                    ...state,
                    name: action.payload.name,
                    email:action.payload.email,
                    password: action.payload.password,
                    isLoggedIn: true
                }; 
            }else{
                return state;
            }
        }

        case ActionTypes.fail: {
            console.log("FAIL!!");
            return state; 
        }
        default:
            return state;
    }
}