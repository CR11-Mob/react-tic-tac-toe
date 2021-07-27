import "./style/PlayerStatus.css";

export default function PlayerStatus(props) {
  const gameGridSizeArr = [3, 4, 6, 8];

  return (
    <>
      <div className="dropdown">
        <select
          name={`gridSize-dropdown`}
          value={props.gridSize}
          onChange={(e) => props.setGridSize(e.target.value)}
        >
          {gameGridSizeArr.map((item, index) => (
            <option key={index} name={item} value={item}>
              {`${item}x`}
            </option>
          ))}
        </select>
      </div>
      <div className="player">
        <div
          className={props.playerTurn === "X" ? "active-X" : "default-X-player"}
        >
          <span>X</span>
          <span>{props.playerName["player-X"]}</span>
          <span>-</span>
        </div>
        <div
          className={props.playerTurn === "O" ? "active-O" : "default-O-player"}
        >
          <span>O</span>
          <span>{props.playerName["player-O"]}</span>
          <span>-</span>
        </div>
      </div>
      <div className="player-turn">
        {props.playerName[`player-${props.playerTurn}`]}
      </div>
    </>
  );
}
