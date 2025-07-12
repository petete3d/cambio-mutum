import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Simulador from './Simulador';
import RegistroCliente from './RegistroCliente';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Simulador />} />
        <Route path="/registro" element={<RegistroCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
