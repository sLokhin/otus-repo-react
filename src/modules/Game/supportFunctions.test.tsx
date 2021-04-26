import { getInitialPixelMass, getRandomPixelMass } from "./Game";

type GetRandomFunction = (min: number, max: number) => number;

export const getRandomNumber: GetRandomFunction = (min, max) => {
  if (min > max) {
    throw new Error(
      "getRandomNumber function: 'min' should not be greater than 'max'"
    );
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

describe("Game support functions test", () => {
  it("getInitialPixelMass test '0' length mass", () => {
    const number = 0;
    const emptyPixelMatrix: boolean[][] = getInitialPixelMass(number);
    expect(emptyPixelMatrix.length).toBe(number);
    expect(emptyPixelMatrix).toMatchObject([]);
  });

  it("getInitialPixelMass test '3' length mass", () => {
    const number = 3;
    const emptyPixelMatrix: boolean[][] = getInitialPixelMass(number);
    expect(emptyPixelMatrix.length).toBe(number);
    expect(emptyPixelMatrix).toMatchObject([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  it("getInitialPixelMass test random length mass", () => {
    const number = getRandomNumber(0, 10);
    const emptyPixelMatrix: boolean[][] = getInitialPixelMass(number);
    expect(emptyPixelMatrix.length).toBe(number);
  });

  it("getRandomPixelMass test '0' length mass", () => {
    const number = 0;
    const percent = 20;
    const pixelMatrix: boolean[][] = getRandomPixelMass(number, percent);
    expect(pixelMatrix.length).toBe(number);
    expect(pixelMatrix).toMatchObject([]);
  });

  it("getRandomPixelMass test random length mass", () => {
    const number = getRandomNumber(0, 10);
    const percent = 20;
    const pixelMatrix: boolean[][] = getRandomPixelMass(number, percent);
    expect(pixelMatrix.length).toBe(number);
  });
});
