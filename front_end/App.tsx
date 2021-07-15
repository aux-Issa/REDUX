import * as React from 'react';
import { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import {History} from 'history'
import {history} from './modules/Store'
import routes from './modules/routes'
import axios from "axios";


interface AppProps {
    history: History
  }
  
 const App = ({history}: AppProps) => {
    return (
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
      
    )

 

}
  
  export default App

 