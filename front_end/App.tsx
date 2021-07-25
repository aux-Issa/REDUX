import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import {History} from 'history'
import routes from './routes/routes'


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

 