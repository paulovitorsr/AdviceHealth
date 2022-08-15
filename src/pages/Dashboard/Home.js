import React from 'react'
import './Index.css';

//Imagens
import Agosto from '../../assets/Agosto.png'
import Medico from '../../assets/Medico.png'

const Home = () => {
  return (
    <div>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-12 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2 d-flex align-items-start">
            <input type="search" name="" id="" placeholder='Pesquisar' className='rounded-pill border border-1 pl-5' />
          </div>
        </div>
      </div>

      
      <div className="row d-flex justify-content-center ">
        <div className="col-md-8 d-flex flex-column">
            <span>Dashboard</span>
            <div>
                <img src={Medico} alt="" className='img-fluid img-thumbnail alt' />
            </div>
        </div>
        <div className="col-md-4 pt-2">
            <img src={Agosto} alt="" className='img-fluid img-thumbnail' />
        </div>
      </div>

      <canvas class="my-4 w-100" id="myChart" width="900" height="180"></canvas>

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
    </main>
    </div>
  )
}

export default Home