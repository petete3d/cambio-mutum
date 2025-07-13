import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Conexión Supabase
const supabaseUrl = 'https://jewaryuxrujpsgpoxgoq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impld2FyeXV4cnVqcHNncG94Z29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxOTAzOTgsImV4cCI6MjA2Nzc2NjM5OH0.JeuKtSCHqWmu9JsWFr1O0fzdQMnoqH7bDYX2Qkcr2Mk';
const supabase = createClient(supabaseUrl, supabaseKey);

const RegistroCliente = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [cpf, setCpf] = useState('');

  const handleRegistro = async () => {
    if (!nombre || !telefono || !correo || !cpf) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const { data, error } = await supabase.from('clientes').insert([
      { nombre, telefono, correo, cpf }
    ]);

    if (error) {
      console.error('❌ Error al registrar cliente:', error.message);
      alert('Ocurrió un error al guardar.');
      return;
    }

    console.log('✅ Cliente registrado:', data);
    navigate('/envios');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Registro Cliente</h2>
      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <button onClick={handleRegistro} style={{
        padding: '10px',
        width: '100%',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '6px'
      }}>
        Continuar
      </button>
    </div>
  );
};

export default RegistroCliente;
