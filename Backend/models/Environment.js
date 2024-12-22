const mongoose = require('mongoose');

const EnvironmentSchema = new mongoose.Schema({
  grid: { type: Array, required: true }, // 10x10 grid representation
  pits: { type: Array, required: true },
  gold: { type: Array, required: true },
  wumpus: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Environment', EnvironmentSchema);
