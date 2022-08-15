import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">Meu Dr.</NavLink>
            <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">Home</NavLink>
            <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/agendamento">Agendamento</NavLink>
            <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/consulta">Consulta</NavLink>
            
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">   
                <a className="nav-link" href="#">Sair</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;