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
        {/* <p style={{ color: "white" }}>{props.playerName.player1}</p>
        <p style={{ color: "white" }}>{props.playerName.player2}</p> */}
        <div className="form-floating mb-3">
          <input
            id="player1-input"
            name="player1"
            value={props.playerName.player1}
            className="form-control player-1"
            placeholder="X"
            onChange={handleInputChange}
          />
          <label htmlFor="player1-input">Player X</label>
        </div>

        <div className="form-floating mb-4">
          <input
            id="player2-input"
            name="player2"
            value={props.playerName.player2}
            className="form-control player-2"
            placeholder="O"
            onChange={handleInputChange}
          />
          <label htmlFor="player2-input">Player O</label>
        </div>

        <div className="start-btn">
          <button> Start </button>
        </div>
      </fieldset>
    </form>
  );
}
