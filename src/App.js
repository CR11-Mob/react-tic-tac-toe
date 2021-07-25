import "./App.css";

import GameGreeting from "./components/GameGreeting";
import PlayerName from "./components/PlayerName";

function App() {
  return (
    <div className="wrapper">
      <div className="game-greeting">
        <GameGreeting />
      </div>
      <div className="player-names">
        <PlayerName />
      </div>
    </div>
  );
}

export default App;
