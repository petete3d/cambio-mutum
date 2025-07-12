import React, { useState } from 'react';

function Simulador() {
  const [monto, setMonto] = useState('');
  const tasa = 24;
  const recibido = monto ? (parseFloat(monto) * tasa).toFixed(2) : '0.00';

  const guardarYContinuar = () => {
    localStorage.setItem('monto_simulado', monto);
    window.location.href = '/api/public/envios.html';
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simulador de Envío</h2>
      <label>¿Cuánto quieres enviar? (R$)</label>
      <input
        id="monto"
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Ej: 200"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <p><strong>Tasa actual:</strong> {tasa} Bs</p>
      <p><strong>Tu familiar recibirá:</strong> {recibido} Bs</p>
      <button onClick={guardarYContinuar}>Continuar</button>
    </div>
  );
}

export default Simulador;
