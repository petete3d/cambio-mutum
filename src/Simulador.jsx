import React, { useState } from 'react';

const Simulador = () => {
  const [monto, setMonto] = useState('');
  const tasa = 24;
  const resultado = monto ? (parseFloat(monto) * tasa).toFixed(2) : '0.00';

  const continuar = () => {
    // Guardar en localStorage para usar en la siguiente pantalla (envios.html)
    localStorage.setItem('montoBs', resultado);
    localStorage.setItem('montoR', monto);

    // Redirigir a la pantalla de envíos
    window.location.href = "/envios.html"; // ✅ ruta corregida
  };

  return (
    <div style={{ maxWidth: 500, margin: '30px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2>Simulador de Envío</h2>

      <label>¿Cuánto quieres enviar? (R$)</label>
      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        style={{ width: '100%', padding: 10, marginTop: 8 }}
      />

      <p style={{ marginTop: 20 }}><strong>Tasa actual:</strong> {tasa} Bs</p>
      <p><strong>Tu familiar recibirá:</strong> {resultado} Bs</p>

      <button onClick={continuar} style={{ marginTop: 15, padding: '10px 20px' }}>
        Continuar
      </button>
    </div>
  );
};

export default Simulador;
