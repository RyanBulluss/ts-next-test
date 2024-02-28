"use client";
import React, { useEffect, useState } from "react";
import {
  startingBoard,
  createEmptyState,
  createPath,
  deepCopy,
} from "./constants";
import { level1 } from "./levels";
import GameCell from "./GameCell";

const GameScreen = () => {
  const [state, setState] = useState(
    createEmptyState(startingBoard.height, startingBoard.width)
  );

  useEffect(() => {
    setState(createPath(level1, deepCopy(state)));
    console.log("created path");
  }, []);

  return (
    <div
      className="h-[800px] w-[800px] border grid grid-cols-3"
      style={{
        gridTemplateColumns: `repeat(${startingBoard.width}, minmax(0, 1fr))`,
      }}
    >
      {state.map((arr, yIdx) =>
        arr.map((obj, xIdx) => <GameCell  key={yIdx+xIdx} obj={obj} />)
      )}
    </div>
  );
};

export default GameScreen;
