import Binance from 'node-binance-api';

export default async function handler(req, res) {
  const binance = new Binance().options({
    APIKEY: process.env.BINANCE_API_KEY,
    APISECRET: process.env.BINANCE_API_SECRET,
  });

  try {
    const accountInfo = await binance.balance();
    const saldoUSDT = accountInfo.USDT?.available || '0.00';
    res.status(200).json({ usdt: saldoUSDT });
  } catch (error) {
    console.error('Error al obtener el saldo:', error);
    res.status(500).json({ error: 'Error al obtener el saldo' });
  }
}
