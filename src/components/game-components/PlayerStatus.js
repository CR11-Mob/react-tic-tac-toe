import "./style/PlayerStatus.css";

export default function PlayerStatus(props) {
  const gameGridSizeArr = [3, 4, 6, 8];

  return (
    <>
      <div className="dropdown">
        <select
          name={`gridSize-dropdown`}
          value={props.gridSize}
          onChange={(e) => {
            props.setGridSize(+e.target.value);
            props.setIsGameOver(false);
          }}
        >
          {gameGridSizeArr.map((item, index) => (
            <option key={index} name={item} value={item}>
              {`${item}x`}
            </option>
          ))}
        </select>
      </div>
      <div className="player">
        {props.playerName.map((item, index) => {
          let activePlayerClass = "";

          if (index === 0) {
            activePlayerClass = "default-X-player";
            if (props.playerTurn === "X") {
              activePlayerClass = "active-X";
            }
            if (props.isGameOver) {
              activePlayerClass = "default-X-player";
            }
          }

          if (index === 1) {
            activePlayerClass = "default-O-player";
            if (props.playerTurn === "O") {
              activePlayerClass = "active-O";
            }
            if (props.isGameOver) {
              activePlayerClass = "default-O-player";
            }
          }

          return (
            <div className={activePlayerClass}>
              <span>{index + 1 === 1 ? "X" : "O"}</span>
              <span>{item[`player-${index + 1}`]}</span>
              <span>{props.playerName[index].totalWin}</span>
            </div>
          );
        })}
      </div>
      <div className="player-turn">
        {props.isGameOver ? "Game Over" : `${props.playerTurn} Turn`}
      </div>
    </>
  );
}
