import { useEffect, useState } from 'react';

export default function App() {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    fetch('/api/pages/balance')
      .then(res => res.json())
      .then(data => setSaldo(data.usdt))
      .catch(err => console.error('Error al obtener saldo:', err));
  }, []);

  return (
    <div>
      <h1>Bienvenido a Cambio Mutum</h1>
      <p>Saldo disponible en Binance: {saldo ? `${saldo} USDT` : 'Cargando...'}</p>
    </div>
  );
}
