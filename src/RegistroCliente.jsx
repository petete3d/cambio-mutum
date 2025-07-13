import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Conexión a Supabase
const supabase = createClient(
  'https://axflkwohcjsskxqvtqzs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Zmxrd29oY2pzc2t4cXZ0cXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NTE5NDcsImV4cCI6MjA2NzIyNzk0N30.JkFd0JrKKMGfK64jkFqaAKzN2YApEnj70D5XwJE4Mng'
);

export default function RegistroCliente() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const registrar = async () => {
    if (!nombre || !telefono || !email) {
      alert('Completa todos los campos');
      return;
    }

    const { data, error } = await supabase.from('clientes').insert([
      {
        nombre,
        telefono,
        email
      }
    ]);

    console.log("Datos enviados:", { nombre, telefono, email });
    console.log("Respuesta Supabase:", { data, error });

    if (error) {
      alert('Error al registrar cliente');
    } else {
      alert('Cliente registrado correctamente');
      navigate('/envios'); // Ruta JSX (no HTML)
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Registro de Cliente</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={e => setTelefono(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={registrar}>Continuar</button>
    </div>
  );
}
