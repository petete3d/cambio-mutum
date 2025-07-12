// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistroCliente from './RegistroCliente';
import Simulador from './Simulador';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistroCliente />} />
        <Route path="/simulador" element={<Simulador />} />
      </Routes>
    </Router>
  );
}

export default App;
