import React, { useContext, useReducer } from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../actions/counterAction'
import { authReducer } from '../reducers/authReducer'
import { UserContext } from './UseContext'

const Navbar = () => {

    const {setIsAuth} = useContext(UserContext)
    const [state, dispatch] = useReducer(authReducer)

    const handleLogout = () => {
        dispatch(logout())
        setIsAuth(false)
      }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseReducer</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Counter</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button 
                        onClick={handleLogout}
                        className="btn btn-outline-success" 
                        type="submit">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
