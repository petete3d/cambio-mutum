import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Conexión a Supabase
const supabase = createClient(
  'https://axflkwohcjsskxqvtqzs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Zmxrd29oY2pzc2t4cXZ0cXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NTE5NDcsImV4cCI6MjA2NzIyNzk0N30.JkFd0JrKKMGfK64jkFqaAKzN2YApEnj70D5XwJE4Mng'
);

function RegistroCliente() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  const registrarCliente = async () => {
    if (!nombre || !telefono || !correo) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const { error } = await supabase.from('clientes').insert([
      {
        nombre,
        telefono,
        correo,
      },
    ]);

    if (error) {
      alert('Error al registrar cliente');
      console.error(error);
    } else {
      navigate('/envios'); // redirige al terminar
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registro de Cliente</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br /><br />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        /><br /><br />
        <button onClick={registrarCliente}>Registrarme</button>
      </div>
    </div>
  );
}

export default RegistroCliente;
