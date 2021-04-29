export const getInitialPixelMass = (n: number): boolean[][] => {
  return new Array(n).fill(undefined).map(() => new Array(n).fill(false));
};

export const getRandomPixelMass = (n: number, percent: number): boolean[][] => {
  const pixelMatrix: boolean[][] = getInitialPixelMass(n);
  let a = Math.round(Math.pow(n, 2) * (percent / 100));
  let b = Math.pow(n, 2);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (Math.random() < a / b) {
        pixelMatrix[i][j] = true;
        a--;
      }
      b--;
    }
  }
  return pixelMatrix;
};

export const getNewPixelMatrix = (
  coordX: number,
  coordY: number,
  newFlag: boolean,
  currentPixelMatrix: boolean[][]
): boolean[][] => {
  return currentPixelMatrix.map((rowMass, xIdx) => {
    if (coordX === xIdx) {
      return rowMass.map((currentPixelState, yIdx) => {
        if (coordY === yIdx) {
          return newFlag === currentPixelState ? currentPixelState : newFlag;
        }
        return currentPixelState;
      });
    }
    return rowMass;
  });
};

export const getNextGeneration = (
  field: boolean[][],
  n: number
): boolean[][] => {
  const oldField = field;
  const newField = JSON.parse(JSON.stringify(field));

  const rows = n;
  const cols = n;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;
      if (i > 0) if (oldField[i - 1][j]) count++;
      if (i > 0 && j > 0) if (oldField[i - 1][j - 1]) count++;
      if (i > 0 && j < cols - 1) if (oldField[i - 1][j + 1]) count++;
      if (j < cols - 1) if (oldField[i][j + 1]) count++;
      if (j > 0) if (oldField[i][j - 1]) count++;
      if (i < rows - 1) if (oldField[i + 1][j]) count++;
      if (i < rows - 1 && j > 0) if (oldField[i + 1][j - 1]) count++;
      if (i < rows - 1 && j < cols - 1) if (oldField[i + 1][j + 1]) count++;
      if (oldField[i][j] && (count < 2 || count > 3)) newField[i][j] = false;
      if (!oldField[i][j] && count === 3) newField[i][j] = true;
    }
  }

  return newField;
};
