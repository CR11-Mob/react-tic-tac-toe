import "./App.css";
import { useState, useEffect } from "react";

import GameGreeting from "./components/game-menu/GameGreeting";
import PlayerName from "./components/game-menu/PlayerName";

import PlayerStatus from "./components/game-components/PlayerStatus";
import GameBoard from "./components/game-components/GameBoard";
import Restart from "./components/game-components/Restart";

function App() {
  const [playerName, setPlayerName] = useState([
    { "player-1": "", totalWin: 0 },
    { "player-2": "", totalWin: 0 },
  ]);

  const [gameStart, setGameStart] = useState(false);

  const [gridSize, setGridSize] = useState(3);

  const [playerTurn, setPlayerTurn] = useState("X");

  const [totalTurn, setTotalTurn] = useState(0);

  const [isGameOver, setIsGameOver] = useState(false);

  const dynamicArray = () => {
    let arr = [];
    for (let i = 0; i < gridSize; i++) {
      arr.push([]);
      for (let j = 0; j < gridSize; j++) {
        arr[i].push("");
      }
    }
    return arr;
  };

  const [gameGrid, setGameGrid] = useState(dynamicArray());

  useEffect(() => {
    setGameGrid(dynamicArray());
    setTotalTurn(0);
    console.log("grid size:", gridSize);
    setPlayerTurn("X");
  }, [gridSize]);

  return (
    <>
      {!gameStart && (
        <div className="wrapper">
          <div className="game-greeting">
            <GameGreeting />
          </div>
          <div className="player-names">
            <PlayerName
              playerName={playerName}
              setPlayerName={setPlayerName}
              setGameStart={setGameStart}
            />
          </div>
        </div>
      )}
      {gameStart && (
        <div className="game-wrapper">
          <main className="main-content">
            <div className="head-area">
              <PlayerStatus
                gridSize={gridSize}
                setGridSize={setGridSize}
                playerName={playerName}
                playerTurn={playerTurn}
                isGameOver={isGameOver}
                setIsGameOver={setIsGameOver}
              />
            </div>
            <div className="game-area">
              <GameBoard
                gameGrid={gameGrid}
                setGameGrid={setGameGrid}
                gridSize={gridSize}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                playerName={playerName}
                setPlayerName={setPlayerName}
                isGameOver={isGameOver}
                setIsGameOver={setIsGameOver}
                totalTurn={totalTurn}
                setTotalTurn={setTotalTurn}
              />
            </div>
            <div className="footer-area">
              <Restart
                setIsGameOver={setIsGameOver}
                setPlayerTurn={setPlayerTurn}
                setTotalTurn={setTotalTurn}
                setGameGrid={setGameGrid}
                dynamicArray={dynamicArray}
              />
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
