const dotenv = require('dotenv');
const publishUpdateEvent = require('./nats/publisher');

dotenv.config();

function startJob() {
  publishUpdateEvent();
  setInterval(publishUpdateEvent, 15 * 60 * 1000); // Every 15 minutes
}

startJob();
