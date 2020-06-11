import React from 'react';
import { Link } from "react-router-dom";
import { deleteToken } from '../utils/Auth'

import '../styles/Navbar.css'

export default function Navbar() {
    const isAuthenticated = localStorage.getItem("TT_TOKEN") !== null;

    return (
        <nav>
            {
                isAuthenticated ?
                <ul>
                    <li>
                        <Link to="/dashboard">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={()=>{
                            deleteToken()
                        }}>Logout</Link>
                    </li>
                </ul>:
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul> 
               
            }
        </nav> 
    )
}