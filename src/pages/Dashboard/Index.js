import React from 'react'
import './Index.css';

import Home from './Home';

const Dashboard = () => {
  return (
    <div className='container-fluid'>

        <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                            <span data-feather="home"></span>
                            Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="file"></span>
                            Atendimentos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="shopping-cart"></span>
                            Todos os pacientes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="users"></span>
                            Internação
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="bar-chart-2"></span>
                            Prontuário eletrônico
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="layers"></span>
                            Faturamento
                            </a>
                        </li>
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-center align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Marcação</span>
                        <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                            <span data-feather="plus-circle"></span>
                        </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            Cirurgia
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            Consulta
                            </a>
                        </li>  
                        </ul>
                </div>
            </nav>

        <Home/>

    </div>
    </div>
  )
}

export default Dashboard;