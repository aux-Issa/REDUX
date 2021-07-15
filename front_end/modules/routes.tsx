import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom' 
import SigninForm from '../containers/Signin'
import Counter from '../containers/counter/counterbox/CountBox'

const routes = (
    <div>
      <Switch>
        <Route path="/login" component={SigninForm} />
        <Redirect exact={true} from="/" to="/login" />
        <Route path="/counter" component={Counter} />
        {/* <Route path="/counter" component={Counter} />
        <Route path="/history" component={CounterHistory} /> */}
      </Switch>
    </div>
  )

  export default routes  