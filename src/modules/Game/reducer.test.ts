import {
  actions,
  reducer,
  gameOptionsDefaultState,
  possibleState,
  possibleSize,
  possibleSpeed,
  DEFAULT_FIELD_SIZE,
  DEFAULT_SLIDER_PERCENT,
} from "./reducer";

import { getRandomPixelMass } from "./supportFunctions";

describe("Name form reducer", () => {
  it("set game state", () => {
    const newGameState = possibleState.finish;
    expect(
      reducer(gameOptionsDefaultState, actions.setGameState(newGameState))
    ).toEqual({
      ...gameOptionsDefaultState,
      gameState: newGameState,
    });
  });

  it("set pixel matrix", () => {
    const newPixelMatrix = getRandomPixelMass(
      DEFAULT_FIELD_SIZE,
      DEFAULT_SLIDER_PERCENT
    );
    expect(
      reducer(gameOptionsDefaultState, actions.setPixelMatrix(newPixelMatrix))
    ).toEqual({
      ...gameOptionsDefaultState,
      pixelMatrix: newPixelMatrix,
    });
  });

  it("set field size", () => {
    const newFieldSize = possibleSize.large;
    expect(
      reducer(gameOptionsDefaultState, actions.setFieldSize(newFieldSize))
    ).toEqual({
      ...gameOptionsDefaultState,
      fieldSize: newFieldSize,
    });
  });

  it("set game speed", () => {
    const newGameSpeed = possibleSpeed.fast;
    expect(
      reducer(gameOptionsDefaultState, actions.setGameSpeed(newGameSpeed))
    ).toEqual({
      ...gameOptionsDefaultState,
      gameSpeed: newGameSpeed,
    });
  });

  it("set fill percenr", () => {
    const newFillPercent = DEFAULT_SLIDER_PERCENT + 5;
    expect(
      reducer(gameOptionsDefaultState, actions.setFillPercent(newFillPercent))
    ).toEqual({
      ...gameOptionsDefaultState,
      fillPercent: newFillPercent,
    });
  });

  it("set increment gen counter", () => {
    expect(
      reducer(gameOptionsDefaultState, actions.incrementGenCounter())
    ).toEqual({
      ...gameOptionsDefaultState,
      genCounter: 1,
    });
  });

  it("set push gen to history", () => {
    const nextGen = getRandomPixelMass(
      DEFAULT_FIELD_SIZE,
      DEFAULT_SLIDER_PERCENT
    );
    const stringifyNewGen = JSON.stringify(nextGen);
    expect(
      reducer(
        gameOptionsDefaultState,
        actions.pushGenToHistory(stringifyNewGen)
      )
    ).toEqual({
      ...gameOptionsDefaultState,
      genHistory: [stringifyNewGen],
    });
  });
});
