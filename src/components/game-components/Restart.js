import "./style/Restart.css";

export default function Restart(props) {
  return (
    <span
      className="restart-game"
      onClick={() => {
        props.setPlayerTurn("X");
        props.setIsGameOver(false);
        props.setTotalTurn(0);
        props.setGameGrid(props.dynamicArray());
      }}
    >
      PLAY AGAIN
    </span>
  );
}
