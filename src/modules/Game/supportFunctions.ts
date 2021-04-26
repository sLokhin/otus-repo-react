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
