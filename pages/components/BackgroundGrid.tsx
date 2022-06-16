import { useEffect, useState } from "react";

const BackgroundGrid = () => {
  const [isGridGenerated, setGridGenerated] = useState(false);
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    if (!isGridGenerated && typeof window !== "undefined") {
      const SIZE = 100;
      const COLUMN_AMOUNT = Math.floor((window.innerWidth - 192) / SIZE);
      const ROW_AMOUNT = Math.floor(window.innerHeight / SIZE);
      const DOTS_IN_GRID = 16;

      const gridArray = [];
      const squareArray = [];

      for (let i = 0; i < DOTS_IN_GRID; i++) {
        squareArray.push("");
      }

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
          ? grid.map((row) =>
              row.map((square, index) => (
                <div className="backgroundGrid__square" key={index}>
                  {square.map((dot, index) => (
                    <div
                      className="backgroundGrid__squareDot"
                      key={"d" + index}
                    ></div>
                  ))}
                </div>
              ))
            )
          : ""}
      </div>
    </>
  );
};

export default BackgroundGrid;
