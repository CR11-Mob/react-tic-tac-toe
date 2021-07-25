import "./style/GameGreeting.css";

export default function GameGreeting() {
  return (
    <div className="greeting-div">
      <div className="react-logo">
        <img src={"logo192.png"} height="50" width="50" alt="React-logo" />
      </div>
      <div className="heading">
        <h2>Tic Tac Toe</h2>
        <h2>Game</h2>
      </div>
    </div>
  );
}
