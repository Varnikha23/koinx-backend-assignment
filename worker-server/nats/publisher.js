const { connect } = require('nats');

async function publishUpdateEvent() {
  try {
    const nc = await connect({ servers: process.env.NATS_URL });
    nc.publish('update-stats', JSON.stringify({ trigger: 'update' }));
    console.log('Published update event to NATS');
    await nc.drain();
  } catch (error) {
    console.error('Error publishing to NATS:', error.message);
  }
}

module.exports = publishUpdateEvent;
