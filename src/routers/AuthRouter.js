import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from '../components/Login';



const AuthRouter = () => {
    return (
        <div className="container">
            <div>
            <Switch>
                <Route exact path="/auth/login" component={Login}/>

                <Redirect to="/auth/login" />
            </Switch>
            </div>
        </div>
    )
}

export default AuthRouter