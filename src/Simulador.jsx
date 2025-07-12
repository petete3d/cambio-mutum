import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Simulador from './Simulador';
// importa otras páginas si es necesario

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/simulador" element={<Simulador />} />
        {/* otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
