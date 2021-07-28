import "./style/PlayerName.css";

export default function PlayerName(props) {
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const playerNameCopy = [...props.playerName];
    playerNameCopy[index][name] = value;
    props.setPlayerName(playerNameCopy);
  };

  return (
    <form key={"from"}>
      <fieldset>
        <legend>Enter Player Name</legend>

        {props.playerName.map((item, index) => (
          <div className="form-floating mb-3">
            <input
              key={index}
              id={`player-${index + 1}-input`}
              name={`player-${index + 1}`}
              value={item[`player-${index + 1}`]}
              className={`form-control player-${index + 1}`}
              autoComplete="off"
              placeholder={index + 1 === 1 ? "X" : "O"}
              onChange={(e) => handleInputChange(e, index)}
            />
            <label htmlFor="player-X-input">{`Player ${
              index + 1 === 1 ? "X" : "O"
            }`}</label>
          </div>
        ))}

        <div className="start-btn">
          <button
            key={"start-btn"}
            onClick={() => {
              if (
                props.playerName["player-X"] === "" &&
                props.playerName["player-O"] === ""
              ) {
                return;
              } else {
                props.setGameStart(true);
              }
            }}
          >
            Start
          </button>
        </div>
      </fieldset>
    </form>
  );
}
