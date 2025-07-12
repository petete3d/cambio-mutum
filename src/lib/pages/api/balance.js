import { NextResponse } from 'next/server';
import Binance from 'node-binance-api';

const binance = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_API_SECRET
});

export async function GET() {
  try {
    const account = await binance.balance();
    const usdtBalance = account.USDT?.available || 0;

    return NextResponse.json({ usdt: usdtBalance });
  } catch (error) {
    console.error('Error al obtener el saldo:', error);
    return NextResponse.json({ error: 'Error al obtener el saldo' }, { status: 500 });
  }
}
