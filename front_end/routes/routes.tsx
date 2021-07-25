import * as React from 'react';
import PrivateRoute from './PrivateRoute'
import { Redirect, Route, Switch } from 'react-router-dom' 
import SigninForm from '../containers/Signin'
import Counter from '../containers/counter/counterbox/CountBox'
import History from '../containers/counter/History';

const routes = (
    <div>
      <Switch>
        <Route path="/login" component={SigninForm} />
        <Redirect exact={true} from="/" to="/login" />
        <PrivateRoute  exact path="/history" component={History} /> 
        <PrivateRoute  exact path="/counter" component={Counter} /> 

      </Switch>
    </div>
  )

  export default routes  