const { connect } = require('nats');
const storeCryptoStats = require('../services/storeCryptoStats');

async function setupSubscriber() {
  try {
    const nc = await connect({ servers: process.env.NATS_URL });
    const sub = nc.subscribe('update-stats');

    console.log('Subscribed to NATS topic: update-stats');

    for await (const msg of sub) {
      console.log(`Received message: ${msg.data}`);
      await storeCryptoStats();
    }
  } catch (error) {
    console.error('Error connecting to NATS:', error.message);
  }
}

module.exports = setupSubscriber;

