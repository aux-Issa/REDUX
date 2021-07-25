import { Redirect, Route ,RouteProps, Switch  } from 'react-router-dom' 
import * as React from 'react';
import { useSelector } from 'react-redux';


 const PrivateRoute: React.FC<RouteProps>= ({...props}) => {
    const logged_in:boolean = useSelector((state:any)=>state.auth.isLoggedIn)
    console.log(logged_in)
    if (logged_in) {
      return <Route {...props}/>
    }else{
      return <Redirect to="/login"/>
    }
  }

  export default PrivateRoute;