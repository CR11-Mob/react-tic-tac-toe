import "./App.css";
import { useState, useEffect } from "react";

import GameGreeting from "./components/game-menu/GameGreeting";
import PlayerName from "./components/game-menu/PlayerName";

import PlayerStatus from "./components/game-components/PlayerStatus";
import GameBoard from "./components/game-components/GameBoard";

function App() {
  const [playerName, setPlayerName] = useState({
    "player-X": "",
    "player-O": "",
  });

  const [gameStart, setGameStart] = useState(false);

  const [gridSize, setGridSize] = useState(3);

  const [playerTurn, setPlayerTurn] = useState("X");

  useEffect(() => {
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
              />
            </div>
            <div className="game-area">
              <GameBoard
                gridSize={gridSize}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
              />
            </div>
            <div className="footer-area"></div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
