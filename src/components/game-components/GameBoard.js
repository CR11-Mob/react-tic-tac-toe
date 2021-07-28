import "./style/GameBoard.css";

import { useState, useEffect } from "react";

export default function GameBoard(props) {
  const [win, setWin] = useState("");

  const handleClick = (e, index, jndex) => {
    if (e.target.innerText !== "") {
      return;
    } else {
      props.setTotalTurn(props.totalTurn + 1);
      playerInput(index, jndex);

      winCheck();
    }
  };

  const playerInput = (index, jndex) => {
    let gameGridCopy = [...props.gameGrid];
    gameGridCopy[index][jndex] = props.playerTurn;
    props.setGameGrid(gameGridCopy);
    console.log("player turn:", props.playerTurn);
    props.playerTurn === "X"
      ? props.setPlayerTurn("O")
      : props.setPlayerTurn("X");
  };

  const playerWin = (player, playerIndex) => {
    let copyPlayerName = [...props.playerName];
    copyPlayerName[playerIndex].totalWin++;
    console.log(copyPlayerName);
    props.setPlayerName(copyPlayerName);

    console.log("Row X  Win:", player);

    props.setTotalTurn(0);
    setWin(player);

    props.setIsGameOver(true);
  };

  const winCheck = () => {
    let lastIndex = props.gridSize;

    let leftDiagonalX = 0;
    let rightDiagonalX = 0;

    let leftDiagonalO = 0;
    let rightDiagonalO = 0;

    for (let i = 0; i < props.gridSize; i++) {
      let rowX = 0;
      let colX = 0;
      let rowO = 0;
      let colO = 0;

      // diagonal lef side

      if (props.gameGrid[i][i] === "X") {
        leftDiagonalX++;
        // console.log("left diagonal X:", leftDiagonalX);

        if (leftDiagonalX === props.gridSize) {
          // console.log("left diagonal X Win", leftDiagonalX);
          playerWin("X", 0);
        }
      } else if (props.gameGrid[i][i] === "O") {
        leftDiagonalO++;
        // console.log("left diagonal O:", leftDiagonalO);

        if (leftDiagonalO === props.gridSize) {
          // console.log("left diagonal O Win", leftDiagonalO);
          playerWin("O", 1);
        }
      }

      // diagonal right side

      if (props.gameGrid[i][lastIndex - 1] === "X") {
        rightDiagonalX++;
        // console.log("-", lastIndex);
        // console.log("right diagonal X:", rightDiagonalX);

        if (rightDiagonalX === props.gridSize) {
          // console.log("right diagonal X Win", rightDiagonalX);
          playerWin("X", 0);
        }
      } else if (props.gameGrid[i][lastIndex - 1] === "O") {
        rightDiagonalO++;
        // console.log("right diagonal O:", rightDiagonalO);

        if (rightDiagonalO === props.gridSize) {
          // console.log("right diagonal O Win", rightDiagonalO);
          playerWin("O", 1);
        }
      }

      lastIndex--;

      // Row and Column Check

      for (let j = 0; j < props.gridSize; j++) {
        // row check

        if (props.gameGrid[i][j] === "X") {
          rowX++;
          // console.log("row X increment:", rowX);
          if (rowX === props.gridSize) {
            // console.log("Row X  Win:", rowX);
            playerWin("X", 0);
            // props.setPlayerName(props.playerName[0].totalWin + 1);
          }
        } else if (props.gameGrid[i][j] === "O") {
          rowO++;
          if (rowO === props.gridSize) {
            // console.log("Row O Win:", rowO);
            playerWin("O", 1);
          }
        }

        // column check

        if (props.gameGrid[j][i] === "X") {
          colX++;
          // console.log("col X increment:", colX);
          if (colX === props.gridSize) {
            // console.log("Col X  Win:", colX);
            playerWin("X", 0);
          }
        } else if (props.gameGrid[j][i] === "O") {
          colO++;
          // console.log("col O increment:", colO);
          if (colO === props.gridSize) {
            // console.log("Col O  Win:", colO);
            playerWin("O", 1);
          }
        }
      }
    }
  };

  useEffect(() => {
    console.log("total turn:", props.totalTurn);
    console.log("is game over:", props.isGameOver);
  }, [props.totalTurn, props.isGameOver]);

  return (
    <>
      {props.totalTurn !== props.gridSize * props.gridSize &&
        !props.isGameOver && (
          <div
            className="game-grid"
            style={{ width: `${props.gridSize * 10}%` }}
          >
            {props.gameGrid.map((item, index) => (
              <div key={index} className={`row-${index}`}>
                {item.map((jtem, jndex) => {
                  let fontSizeClass =
                    props.gridSize >= 6
                      ? "item-font-size-1rem"
                      : "item-font-size-3rem";

                  return (
                    <div
                      key={jndex}
                      className={`row-item ${fontSizeClass}`}
                      style={
                        jtem === "X"
                          ? { color: "rgb(0, 236, 213)" }
                          : { color: "rgb(255, 159, 25)" }
                      }
                      onClick={(e) => handleClick(e, index, jndex)}
                    >
                      {jtem}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      {props.totalTurn === props.gridSize * props.gridSize && (
        <div className="draw">
          <span style={{ fontSize: "4rem", color: "rgb(0, 236, 213)" }}>X</span>
          <span style={{ fontSize: "4rem", color: "rgb(255, 159, 25)" }}>
            O
          </span>
          <span style={{ fontSize: "4rem", marginLeft: "10px" }}>Draw!</span>
        </div>
      )}
      {props.isGameOver && (
        <div className="win">
          <span
            style={
              win === "X"
                ? { fontSize: "4rem", color: "rgb(0, 236, 213)" }
                : { fontSize: "4rem", color: "rgb(255, 159, 25)" }
            }
          >
            {win}
          </span>
          <span style={{ fontSize: "4rem", marginLeft: "5px" }}>Wins!</span>
        </div>
      )}
    </>
  );
}
