import { useEffect, useState } from "react";

import { X5, X6, X8 } from "./GridSvgs";

const BackgroundGrid = () => {
  const [isGridGenerated, setGridGenerated] = useState(false);
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    if (!isGridGenerated && typeof window !== "undefined") {
      const SIZE = 50;
      const COLUMN_AMOUNT = Math.floor((window.innerWidth - 192) / SIZE);
      const ROW_AMOUNT = Math.floor(window.innerHeight / SIZE);

      const gridArray = [];
      const squareArray = [];

      for (let i = 0; i < ROW_AMOUNT; i++) {
        const rowArray = [];
        for (let j = 0; j < COLUMN_AMOUNT; j++) {
          rowArray.push(squareArray);
        }
        gridArray.push(rowArray);
      }
      setGrid(gridArray);
      setGridGenerated(true);
    }
    console.log(grid);
  });
  return (
    <>
      <div className="backgroundGrid">
        {grid !== null
          ? grid.map((row) => row.map((square, index) => <X8 fill="#E3AB10" />))
          : ""}
      </div>
    </>
  );
};

export default BackgroundGrid;
