// src/pages/Envios.jsx
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Conexión con Supabase
const supabase = createClient(
  'https://axflkwohcjsskxqvtqzs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Zmxrd29oY2pzc2t4cXZ0cXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NTE5NDcsImV4cCI6MjA2NzIyNzk0N30.JkFd0JrKKMGfK64jkFqaAKzN2YApEnj70D5XwJE4Mng'
);

const Envios = () => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [montoBRL, setMontoBRL] = useState('');
  const [resultado, setResultado] = useState(null);
  const tasaActual = 240; // Valor de ejemplo, se puede actualizar luego

  const manejarEnvio = async () => {
    if (!nombre || !cedula || !montoBRL) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    const montoBs = parseFloat(montoBRL) * tasaActual;

    const { data, error } = await supabase
      .from('envios')
      .insert([
        {
          nombre,
          cedula,
          telefono,
          monto_brl: parseFloat(montoBRL),
          tasa: tasaActual,
          monto_bs: montoBs,
          fecha: new Date()
        }
      ]);

    if (error) {
      console.error(error);
      alert('❌ Error al registrar el envío');
    } else {
      setResultado(`✅ Envío registrado. El destinatario recibirá Bs ${montoBs.toFixed(2)}`);
      setNombre('');
      setCedula('');
      setTelefono('');
      setMontoBRL('');
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>📤 Enviar Dinero</h2>
      <input
        type="text"
        placeholder="Nombre del destinatario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <input
        type="text"
        placeholder="Cédula o documento"
        value={cedula}
        onChange={(e) => setCedula(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <input
        type="text"
        placeholder="Teléfono (opcional)"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <input
        type="number"
        placeholder="Monto en Reales (BRL)"
        value={montoBRL}
        onChange={(e) => setMontoBRL(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <button
        onClick={manejarEnvio}
        style={{ padding: 10, width: '100%', backgroundColor: '#28a745', color: 'white' }}
      >
        Enviar
      </button>

      {resultado && <p style={{ marginTop: 20 }}>{resultado}</p>}
    </div>
  );
};

export default Envios;
