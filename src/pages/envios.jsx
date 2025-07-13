"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("❌ Variables de entorno de Supabase no definidas.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Envios() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [monto_brl, setMontoBRL] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarEnvio = async () => {
    if (!nombre || !cedula || !telefono || !monto_brl) {
      alert("❌ Todos los campos obligatorios deben estar llenos.");
      return;
    }

    const { data, error } = await supabase.from("envios").insert([
      {
        nombre,
        cedula,
        telefono,
        monto_brl: parseFloat(monto_brl),
      },
    ]);

    if (error) {
      console.error("Error al registrar:", error);
      alert("❌ Hubo un problema al registrar el envío.");
    } else {
      alert("✅ Envío registrado correctamente.");
      setNombre("");
      setCedula("");
      setTelefono("");
      setMontoBRL("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Registrar Envío</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Cédula"
        value={cedula}
        onChange={(e) => setCedula(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Monto en BRL"
        value={monto_brl}
        onChange={(e) => setMontoBRL(e.target.value)}
        style={inputStyle}
      />

      <button onClick={registrarEnvio} style={buttonStyle}>
        Continuar
      </button>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px",
  width: "100%",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
