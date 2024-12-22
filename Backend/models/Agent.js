const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  position: { type: Array, default: [0, 0] }, // Starting at (0, 0)
  knowledgeBase: { type: Object, default: {} }, // Agent's knowledge base
  actions: { type: Array, default: [] }, // List of actions taken
  state: { type: String, default: 'Exploring' }, // Current agent state
});

module.exports = mongoose.model('Agent', AgentSchema);
