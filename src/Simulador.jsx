import { useState } from 'react'

export default function Simulador() {
  const [monto, setMonto] = useState('')
  const tasa = 24 // puedes modificar esto después o hacerlo dinámico
  const calculado = monto ? (parseFloat(monto) * tasa).toFixed(2) : '0.00'

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, background: '#f1f1f1', borderRadius: 10 }}>
      <h2>Simulador de Envío</h2>

      <label>¿Cuánto quieres enviar? (R$)</label>
      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Ej: 100"
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />

      <p>Tasa actual: <strong>{tasa} Bs</strong></p>
      <p>Tu familiar recibirá: <strong>{calculado} Bs</strong></p>

      <button style={{ marginTop: 20 }}>Continuar</button>
    </div>
  )
}
