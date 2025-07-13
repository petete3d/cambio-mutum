import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistroCliente from './RegistroCliente';
import Envios from './pages/envios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistroCliente />} />
        <Route path="/envios" element={<Envios />} />
      </Routes>
    </Router>
  );
}

export default App;
