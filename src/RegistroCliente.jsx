import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistroCliente() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async () => {
    if (password !== confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Aquí puedes conectar con Supabase si quieres
    // Por ahora solo navegación
    navigate('/simulador');
  };

  return (
    <div>
      <h2>Registro de Cliente</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirmar contraseña" value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)} />
      <button onClick={handleRegistro}>Registrarse</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default RegistroCliente;
