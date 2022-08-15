import React from 'react'

const Agendamento = () => {
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

            <h2 className='mb-5'>Agendados</h2>
      <div class="table-responsive-md display-20">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>coluna 1</th>
              <th>coluna 2</th>
              <th>coluna 3</th>
              <th>coluna 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>110011</td>
              <td>110011</td>
              <td>110011</td>
              <td>110011</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
              <td>odio</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>libero</td>
              <td>Sed</td>
              <td>cursus</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>dapibus</td>
              <td>diam</td>
              <td>Sed</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>Nulla</td>
              <td>quis</td>
              <td>sem</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>nibh</td>
              <td>elementum</td>
              <td>imperdiet</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>sagittis</td>
              <td>ipsum</td>
              <td>Praesent</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>Fusce</td>
              <td>nec</td>
              <td>tellus</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>augue</td>
              <td>semper</td>
              <td>porta</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>massa</td>
              <td>Vestibulum</td>
              <td>lacinia</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>eget</td>
              <td>nulla</td>
              <td>Class</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>taciti</td>
              <td>sociosqu</td>
              <td>ad</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>torquent</td>
              <td>per</td>
              <td>conubia</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>per</td>
              <td>inceptos</td>
              <td>himenaeos</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>sodales</td>
              <td>ligula</td>
              <td>in</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    </div>
  )
}

export default Agendamento;