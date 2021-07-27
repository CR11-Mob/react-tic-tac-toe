import "./style/GameBoard.css";

import { useState, useEffect } from "react";

export default function GameBoard(props) {
  const dynamicArray = () => {
    let arr = [];
    for (let i = 0; i < props.gridSize; i++) {
      arr.push([]);
      for (let j = 0; j < props.gridSize; j++) {
        arr[i].push("");
      }
    }
    return arr;
  };

  const [gameGrid, setGameGrid] = useState(dynamicArray());

  const handleClick = (e, index, jndex) => {
    if (e.target.innerText !== "") {
      return;
    } else {
      playerInput(index, jndex);

      winCheck(index, jndex);
    }
  };

  const playerInput = (index, jndex) => {
    let gameGridCopy = [...gameGrid];
    gameGridCopy[index][jndex] = props.playerTurn;
    setGameGrid(gameGridCopy);
    props.playerTurn === "X"
      ? props.setPlayerTurn("O")
      : props.setPlayerTurn("X");
  };

  const winCheck = (index, jndex) => {
    console.log("grid array:", gameGrid[index][jndex]);

    for (let i = 0; i < props.gridSize; i++) {
      for (let j = 0; j < props.gridSize; j++) {
        console.log("for loop:", gameGrid[i][j]);
      }
    }
  };

  useEffect(() => {
    setGameGrid(dynamicArray());
  }, [props.gridSize]);

  return (
    <div className="game-grid" style={{ width: `${props.gridSize * 10}%` }}>
      {gameGrid.map((item, index) => (
        <div key={index} className={`row-${index}`}>
          {item.map((jtem, jndex) => {
            return (
              <div
                key={jndex}
                className={`row-item`}
                onClick={(e) => handleClick(e, index, jndex)}
              >
                {jtem}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
