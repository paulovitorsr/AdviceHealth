import React from 'react'
import './Index.css';

const Consulta = () => {
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
            <div className="container-fluid d-flex justify-content-end mt-2">
                <input type="search" name="pesquisa" id="" placeholder='Pesquisar' className='w-25 mb-2' />
            </div>
            <div className="row">
                <div className="col-8 d-flex justify-content-center">
                    <table>
                    <tbody className='thead-dark'>
                        <tr>
                            <th className='p-2'>Coluna 1</th>
                            <th className='p-2'>Coluna 1</th>
                            <th className='p-2'>Coluna 1</th>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <div className=" col-8 d-flex flex-column ">
                    <div>
                        <input className='mb-2' type="checkbox" name="" id="" />
                        <span  className='p-2'>Coluna 1</span> 
                    </div>
                    <div>
                        <input className='mb-2' type="checkbox" name="" id="" />
                        <span  className='p-2'>Coluna 1</span> 
                    </div>
                    <div>
                        <input className='mb-2' type="checkbox" name="" id="" />
                        <span  className='p-2'>Coluna 1</span> 
                    </div>
                    <div>
                        <input className='mb-2' type="checkbox" name="" id="" />
                        <span  className='p-2'>Coluna 1</span> 
                    </div>
                    <div>
                        <input className='mb-2' type="checkbox" name="" id="" />
                        <span  className='p-2'>Coluna 1</span> 
                    </div>
                    <div>
                        <input className='mb-2' type="checkbox" name="" id="" />
                        <span  className='p-2'>Coluna 1</span> 
                    </div>
                </div>
                <div className="col-1 d-flex flex-column">
                   
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                </div>
                <div className="col-2 d-flex flex-column">
                   
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                    <span>Coluna 1</span>
                </div>
            </div>
            
    </div>
    </div>
  )
}

export default Consulta;