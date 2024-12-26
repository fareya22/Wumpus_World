const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Generate a 10x10 grid with random placement of Wumpus, pits, and gold
app.get('/generate-environment', (req, res) => {
    const size = 10;
    const grid = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => ({
            isWumpus: false,
            isPit: false,
            isGold: false,
        }))
    );

    // Randomly place Wumpus, pits, and gold
    const placeRandom = (type, count) => {
        while (count > 0) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            if (!grid[x][y].isWumpus && !grid[x][y].isPit && !grid[x][y].isGold) {
                grid[x][y][type] = true;
                count--;
            }
        }
    };

    placeRandom('isWumpus', 1);
    placeRandom('isPit', 5);
    placeRandom('isGold', 3);

    res.json({ grid });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
