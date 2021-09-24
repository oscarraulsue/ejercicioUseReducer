import React, { useContext, useReducer } from 'react';
import { authReducer , initialState} from '../reducers/authReducer';
import {login, logout} from '../actions/counterAction'
import { UserContext } from './UseContext';


export const Login = () => {

    const {setIsAuth} = useContext(UserContext)
    const [state, dispatch] = useReducer(authReducer, initialState)

   
    const handleLogin = () => {
      dispatch(login('12345', 'oscarSue'))
      setIsAuth(true)
    }
    

    return (
        <div>
            <h1>Login</h1>
            <hr />
            <p>
            {state.name}
            {state.uid}
            </p>
            <button 
                className="btn btn-primary" 
                onClick={handleLogin}
            >
                Login
            </button>
            <button 
                className="btn btn-danger" 
                onClick={()=>dispatch(logout())}
            >
                Logout
            </button>
        </div>
    )
}
