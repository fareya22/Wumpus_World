const Environment = require('../models/Environment');

// Generate random environment
exports.createRandomEnvironment = async (req, res) => {
  try {
    const grid = Array(10).fill(null).map(() => Array(10).fill('Empty'));
    const pits = [...Array(10)].map(() => [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
    const gold = [[Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]];
    const wumpus = [[Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]];

    pits.forEach(([x, y]) => (grid[x][y] = 'Pit'));
    gold.forEach(([x, y]) => (grid[x][y] = 'Gold'));
    wumpus.forEach(([x, y]) => (grid[x][y] = 'Wumpus'));

    const environment = new Environment({ grid, pits, gold, wumpus });
    await environment.save();

    res.status(201).json(environment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
