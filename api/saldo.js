// api/saldo.js
import crypto from 'crypto';
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const apiKey = process.env.BINANCE_API_KEY;
  const secretKey = process.env.BINANCE_API_SECRET;

  const timestamp = Date.now();
  const query = `timestamp=${timestamp}`;
  const signature = crypto.createHmac('sha256', secretKey).update(query).digest('hex');

  const url = `https://api.binance.com/api/v3/account?${query}&signature=${signature}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'X-MBX-APIKEY': apiKey },
  });

  if (!response.ok) {
    return res.status(500).json({ error: 'No se pudo obtener el saldo' });
  }

  const data = await response.json();
  const usdt = data.balances.find((b) => b.asset === 'USDT')?.free || 0;

  res.status(200).json({ usdt });
}
