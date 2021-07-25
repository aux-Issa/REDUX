import {  applyMiddleware ,createStore, compose } from "redux";
import thunk from 'redux-thunk'
// ReactRouterがフロントエンドのルーティングを実現する．Reduxとともに使う場合は、Connected React Routerを使う
import { routerMiddleware, ConnectedRouter} from 'connected-react-router'
// Connected React Routerにはhistoryが必要。
import { createBrowserHistory } from 'history'
// import { CounterReducer} from './reducers/Reducers';
import rootReducer from './reducers/index';
import Counter from "front_end/containers/counter/counterbox/CountBox";
export const history = createBrowserHistory();

/// ReduxDevToolsのためのセッティング
interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
declare var window: ExtendedWindow;  
const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/////

function configureStore() {
    const store = createStore(
        rootReducer(history),
        composeReduxDevToolsEnhancers (applyMiddleware(
            routerMiddleware(history),
            thunk,
        )),
      )
    return store;    
}
const store = configureStore();
export default store;
export type RootStore = ReturnType<typeof rootReducer>

