import { useState } from 'react';
import { supabase } from './supabaseClient';
import './Registro.css'; // Asegúrate de crear este archivo también

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('envios').insert([
      {
        nombre,
        cedula,
        telefono,
        monto_brl: parseFloat(monto),
      }
    ]);

    if (error) {
      setMensaje('❌ Error al guardar el registro.');
      console.error(error);
    } else {
      setMensaje('✅ Registro guardado exitosamente.');
      setNombre('');
      setCedula('');
      setTelefono('');
      setMonto('');
    }
  };

  return (
    <div className="registro-bg">
      <div className="registro-card">
        <h2>📤 Registro de Envío</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="👤 Nombre del destinatario"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="🪪 Cédula o documento"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="📱 Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="💰 Monto en BRL"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
        <p className="mensaje">{mensaje}</p>
      </div>
    </div>
  );
}
