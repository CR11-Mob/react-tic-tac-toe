import "./App.css";
import { useState } from "react";

import GameGreeting from "./components/GameGreeting";
import PlayerName from "./components/PlayerName";

function App() {
  const [playerName, setPlayerName] = useState({
    player1: "",
    player2: "",
  });

  return (
    <div className="wrapper">
      <div className="game-greeting">
        <GameGreeting />
      </div>
      <div className="player-names">
        <PlayerName playerName={playerName} setPlayerName={setPlayerName} />
      </div>
    </div>
  );
}

export default App;
