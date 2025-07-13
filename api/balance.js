import Binance from 'node-binance-api';

const binance = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_API_SECRET
});

export default async function handler(req, res) {
  try {
    const account = await binance.balance();
    res.status(200).json(account);
  } catch (error) {
    console.error('Error al obtener balance:', error);
    res.status(500).json({ error: 'No se pudo obtener el balance' });
  }
}
 //
