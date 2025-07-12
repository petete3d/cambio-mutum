useEffect(() => {
  async function obtenerSaldo() {
    try {
      const res = await fetch('/api/saldo');
      const data = await res.json();
      console.log('Saldo Binance:', data.usdt);
    } catch (error) {
      console.error('Error al obtener saldo:', error);
    }
  }

  obtenerSaldo();
}, []);
