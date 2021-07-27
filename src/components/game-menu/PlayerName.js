import "./style/PlayerName.css";
// import { useState } from "react";

export default function PlayerName(props) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setPlayerName({
      ...props.playerName,
      [name]: value,
    });
  };
  return (
    <form>
      <fieldset>
        <legend>Enter Player Name</legend>
        {/* <p style={{ color: "white" }}>{props.playerName.player-X}</p>
        <p style={{ color: "white" }}>{props.playerName.player-O}</p> */}
        <div className="form-floating mb-3">
          <input
            id="player-X-input"
            name="player-X"
            value={props.playerName["player-X"]}
            className="form-control player-1"
            autoComplete="off"
            placeholder="X"
            onChange={handleInputChange}
          />
          <label htmlFor="player-X-input">Player X</label>
        </div>

        <div className="form-floating mb-4">
          <input
            id="player-O-input"
            name="player-O"
            value={props.playerName["player-O"]}
            className="form-control player-2"
            autoComplete="off"
            placeholder="O"
            onChange={handleInputChange}
          />
          <label htmlFor="player-O-input">Player O</label>
        </div>

        <div className="start-btn">
          <button
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
