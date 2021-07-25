import "./style/PlayerName.css";

export default function PlayerName() {
  return (
    <>
      <form>
        <fieldset>
          <legend>Enter Player Name</legend>
          <div className="form-floating mb-3">
            <input
              name="player1"
              id="player1-input"
              className="form-control player-1"
              placeholder="X"
            />
            <label htmlFor="player1-input">Player X</label>
          </div>

          <div className="form-floating mb-4">
            <input
              name="player2"
              id="player2-input"
              className="form-control player-2"
              placeholder="O"
            />
            <label htmlFor="player2-input">Player O</label>
          </div>

          <div className="start-btn">
            <button> Start </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
