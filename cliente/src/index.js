import React from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import RegistrarCategoria from './components/RegistrarCategoria';
import RegistrarEquipo from './components/RegistrarEquipo';
import RegistrarEvento from './components/RegistrarEvento';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<>
    <Router>
    <Routes>
        <Route path="/Inicio" element={<LandingPage/>}></Route>
        <Route path="/Registrar/Equipo" element={<RegistrarEquipo/>}></Route>
        <Route path="/Registrar/Evento" element={<RegistrarEvento/>}></Route>
        <Route path="/Registrar/Categoria" element={<RegistrarCategoria/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>

    </Routes>


    </Router>
    

</>)