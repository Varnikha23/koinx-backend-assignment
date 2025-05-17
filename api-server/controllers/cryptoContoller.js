const CryptoStat = require('../models/CryptoStat');

exports.getLatestStats = async (req, res) => {
  const { coin } = req.query;
  if (!coin) return res.status(400).json({ error: 'Coin parameter is required.' });

  try {
    const stat = await CryptoStat.findOne({ coin }).sort({ timestamp: -1 });
    if (!stat) return res.status(404).json({ error: 'No data found for the specified coin.' });

    res.json({
      price: stat.price,
      marketCap: stat.marketCap,
      '24hChange': stat.change24h
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.getDeviation = async (req, res) => {
  const { coin } = req.query;
  if (!coin) return res.status(400).json({ error: 'Coin parameter is required.' });

  try {
    const stats = await CryptoStat.find({ coin }).sort({ timestamp: -1 }).limit(100);
    if (stats.length === 0) return res.status(404).json({ error: 'No data found for the specified coin.' });

    const prices = stats.map(stat => stat.price);
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
    const deviation = Math.sqrt(variance);

    res.json({ deviation: parseFloat(deviation.toFixed(2)) });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

