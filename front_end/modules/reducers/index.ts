import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { useReducer } from 'react'
import { combineReducers } from 'redux'
import { CounterReducer } from './Reducers'
import {AuthenticateReducer} from './Reducers'
// conbineでcounterとログインに関するreducerを設定
const rootReducer = (history: History) => combineReducers({
  counter: CounterReducer,
  auth: AuthenticateReducer,
  router: connectRouter(history),
})

export default rootReducer;
