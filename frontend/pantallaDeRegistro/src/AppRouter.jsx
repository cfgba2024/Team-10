import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IniciarSesion } from './pages/IniciarSesion';
import { PaginaRegistro } from './pages/PaginaRegistro';
import { PaginaInicio} from './pages/PaginaInicio';
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      <Route path="/registro" element={<PaginaRegistro />} />
      {/* <Route path="/principal" element={<PaginaPrincipal />} /> */}
     
    </Routes>
  );
}

