import React, { useEffect, useState } from 'react';

export default function Envios() {
  const [monto, setMonto] = useState('');
  const [bolivares, setBolivares] = useState('');
  const [tasa, setTasa] = useState('');

  useEffect(() => {
    const montoGuardado = localStorage.getItem('monto');
    const bolivaresGuardados = localStorage.getItem('bolivares');
    const tasaGuardada = localStorage.getItem('tasa');

    setMonto(montoGuardado);
    setBolivares(bolivaresGuardados);
    setTasa(tasaGuardada);
  }, []);

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: 'auto' }}>
      <h2>📦 Detalles del Envío</h2>
      <p><strong>Monto enviado:</strong> R$ {monto}</p>
      <p><strong>Tasa actual:</strong> {tasa} Bs</p>
      <p><strong>Tu familiar recibirá:</strong> {bolivares} Bs</p>

      <button onClick={() => alert('Aquí iría la lógica para continuar el envío')}>Confirmar Envío</button>
    </div>
  );
}
