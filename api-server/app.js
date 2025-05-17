const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const setupSubscriber = require('./nats/subscriber');
const cryptoRoutes = require('./routes/cryptoRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', cryptoRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  setupSubscriber();
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});
