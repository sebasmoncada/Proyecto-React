import React from 'react';
import './App.css';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import Menu from './componentes/Menu/Menu';
import Inicio from './componentes/Inicio/Inicio';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import Pagos from './componentes/Pagos/Pagos';
import ModelosTop from './componentes/ModelosTop/ModelosTop';
import Inscripcion from './componentes/Inscripcion/Inscripcion';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className='p-lg-5 p-5 '></div>
        <div className='p-lg-0 p-5 '></div>
        <div className='p-lg-0 p-4 '></div>

        <Routes>
          <Route path="/" element={<Inicio />}/> 
          <Route path="/Modelos" element={<ModelosTop />}/> 
          <Route path="/Qsomos" element={<QuienesSomos />}/> 
          <Route path="/pagos" element={<Pagos />}/> 
          <Route path="/Inscripcion" element={<Inscripcion />}/> 
        </Routes>
      </Router>

      {/* <Inicio /> */}
    </>
  );
}

export default App;
