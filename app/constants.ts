const startingBoard = {
  height: 10,
  width: 10,
};

function createEmptyState(height: number, width: number) {
  let state = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push({
        type: "empty",
      });
    }
    state.push(row);
  }
  return state;
}

function createPath(positions: any, state:any) {
    const newState = [...state];
    positions.forEach((pos: any) => {
        newState[pos[0]][pos[1]].type = "path";
    })
    return newState;
}

function deepCopy(initialState: any): any {
  return JSON.parse(JSON.stringify(initialState));
};

export { startingBoard, createEmptyState, createPath, deepCopy };
