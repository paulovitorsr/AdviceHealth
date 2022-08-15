import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Agendamento from '../pages/Agendamento/Index';
import Consulta from '../pages/Consulta/Index';
import Dashboard from '../pages/Dashboard/Index';


const RouteApp = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/agendamento' element={<Agendamento/>}/>
            <Route path='*' element={<Consulta/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteApp