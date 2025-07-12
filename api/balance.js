import Binance from 'node-binance-api'

const binance = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_API_SECRET,
})

export default async function handler(req, res) {
  try {
    const balances = await binance.balance()
    const usdt = balances.USDT?.available || '0.00'
    res.status(200).json({ balance: usdt })
  } catch (error) {
    console.error('Error al obtener el saldo:', error.body || error)
    res.status(500).json({ error: 'No se pudo obtener el saldo' })
  }
}
