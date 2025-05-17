const axios = require('axios');
const CryptoStat = require('../models/CryptoStat');

const coins = ['bitcoin', 'ethereum', 'matic-network'];

async function storeCryptoStats() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: coins.join(','),
        vs_currencies: 'usd',
        include_market_cap: 'true',
        include_24hr_change: 'true'
      }
    });

    for (const coin of coins) {
      const data = response.data[coin];
      if (!data) continue;

      await CryptoStat.create({
        coin,
        price: data.usd,
        marketCap: data.usd_market_cap,
        change24h: data.usd_24h_change
      });
    }

    console.log('Crypto stats stored successfully.');
  } catch (error) {
    console.error('Error storing crypto stats:', error.message);
  }
}

module.exports = storeCryptoStats;

