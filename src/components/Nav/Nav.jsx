
import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'


const Nav = () => {


return (
<header className="header-navbar">
    <nav className="nav_principal">        
        <ul>     
             <li>
                <h1 style={{
                    backgroundColor:'white',
                    fontSize:30,
                    fontFamily:'monospace',
                    color:'#2a4798',
                    borderRadius:'19px',
                    padding:'5px'
                }}>ServiCarla</h1>
            </li>                   
            <li >
                <NavLink className="navlink" exact to="/" >
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink className="navlink" exact to="/nosotros" >
                    Nosotros
                </NavLink>
            </li>
            <li>
                <NavLink className="navlink" exact to="/" >
                    Contactanos
                </NavLink>
            </li>
            <li>
                <NavLink className="navlink" exact to="/intranet/usuario" >
                    Iniciar Sessión
                </NavLink>
            </li>            
        </ul>
    </nav>
</header>)


}

export default Nav