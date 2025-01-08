/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../styles/AgentMode.scss";
import "../styles/Button.css";
import "../styles/Grid.css";
import "../styles/Slider.css";
import Cell from "./Cell";
import { play } from "./Play";

import useSound from "use-sound";
import goldCollectSound from "../assets/audio/coin_punch.wav";
import shootSound from "../assets/audio/scream.mp3";
import loseSound from "../assets/loseSound.mp3";
import playSound from "../assets/playSound.mp3";
import winSound from "../assets/winSound.mp3";

const Grid = () => {
  const [cheatMode, setCheatMode] = useState(true);
  const [board, setBoard] = useState(play.getBoard());
  const [finalMessage, setFinalMessage] = useState("");
  const [wumpusCnt, setWumpusCnt] = useState(3);
  const [pitCnt, setPitCnt] = useState(5);
  const [goldCnt, setGoldCnt] = useState(2);
  const [isDareDevilMode, setDareDevilMode] = useState(false);
  const [playBtnSound] = useSound(playSound);
  const [coinCollectSound] = useSound(goldCollectSound);
  const [winningSound] = useSound(winSound);
  const [losingSound] = useSound(loseSound);
  const [shootingSound] = useSound(shootSound);

  let latestWumpus = wumpusCnt;
  let latestPit = pitCnt;
  let latestGold = goldCnt;
  let difficultyMode = "";
  let isMoving = 0;

  function toggleCheatMode() {
    playBtnSound();
    setCheatMode(!cheatMode);
  }

  function resetBoard() {
    playBtnSound();
    play.resetGameEnvironment();
    play.gameOnInit(latestWumpus, latestPit, latestGold, difficultyMode);
    setFinalMessage("");
    setBoard([...play.getBoard()]);
  }

  const moveAgent = async () => {
    playBtnSound();

    async function makeNextMove() {
      if (isMoving > 0 && !play.isGameOver()) {
        play.makeMove();
        setBoard([...play.getBoard()]);
        isMoving = isMoving - 1;

        await new Promise((resolve) => setTimeout(resolve, 500));

        if (play.isGameOver()) {
          if (play.isYouWin()) {
            winningSound();
            setFinalMessage("All gold Collected");
            setBoard([...play.getBoard()]);
            isMoving = 0;
          } else if (play.isYouLose()) {
            losingSound();
            setFinalMessage(
              "🏳🏳 Nooo! You Lost! You fall into Pit => " +
              play.agentIndex.row +
              ", " +
              play.agentIndex.column +
              "🏳🏳"
            );
          }
        } else {
          makeNextMove();
        }
      }
    }

    isMoving = 1500;
    makeNextMove();
  };

  const grid = [];
  for (let r = 0; r < 10; r++) {
    const row = [];
    for (let c = 0; c < 10; c++) {
      row.push(play.getBoard()[c][r]);
    }
    grid.push(row);
  }

  useEffect(() => {
    if (play.isShoot) {
      shootingSound();
      play.isShoot = false;
    }
  }, [play.isShoot, shootingSound]);

  useEffect(() => {
    if (play.isGoldFound) {
      coinCollectSound();
      play.isGoldFound = false;
    }
  }, [play.isGoldFound, coinCollectSound]);

  return (
    <div className="game-container flex justify-center items-center">
      <div className="game-layout">
        {/* Buttons and Game Info Section */}
        <div className="button-container max-w-xl">
          <button className="custom-btn" onClick={moveAgent}>
            Play
          </button>
          {/* <button className="custom-btn" onClick={toggleCheatMode}>
            {cheatMode ? "Cheat Mode ON" : "Cheat Mode OFF"}
          </button> */}
          <button className="custom-btn" onClick={resetBoard}>
            Reset
          </button>
          <div className="upload-group" style={{ marginTop: "1.2rem" }}>
                <label htmlFor="customBoard">Upload Board </label>
                <input
                  className="form-field"
                  type="file"
                  name="customBoard"
                  onChange={(e) => uploadBoard(e)}
                />
              </div>

          <div className="game-info">
            <h2 className="text-box" >
               Points: {play.point}
            </h2>
            <h2 className="text-box">
               Wumpus Killed: {play.wumpusKilled}
            </h2>
            <h2 className="text-box">
               Gold Collected: {play.discoveredGold}
            </h2>
            <h2 className="text-box">
               Moves: {play.moveCount}
            </h2>
          </div>

          <div className="message-box">
            <h2 className="alert-box" style={{
              color: "black",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
              {finalMessage}
            </h2>
          </div>
        </div>

        {/* Game Board Section */}
        <div className="right-container">
          <div className="game-board">
            {grid.map((col, colIndex) => (
              <div key={colIndex} className="row">
                {col.map((cell, rowIndex) => (
                  <div key={rowIndex} className="box">
                    <Cell
                      id={cell}
                      cheatMode={cheatMode}
                      x={rowIndex}
                      y={colIndex}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
