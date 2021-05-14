import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

import {
  findPattern,
  findCycle,
  executeCycleSearch,
  checkWinConditionSaga,
} from "./saga";

import { reducer, gameOptionsDefaultState, possibleState } from "./reducer";

describe("Test game saga", () => {
  it("check check win condition success", () => {
    return expectSaga(checkWinConditionSaga)
      .withReducer(reducer)
      .provide([[matchers.call.fn(executeCycleSearch), true]])
      .hasFinalState({
        ...gameOptionsDefaultState,
        gameState: possibleState.finish,
      })
      .run();
  });

  it("check check win condition failure", () => {
    return expectSaga(checkWinConditionSaga)
      .withReducer(reducer)
      .provide([[matchers.call.fn(executeCycleSearch), false]])
      .hasFinalState({
        ...gameOptionsDefaultState,
      })
      .run();
  });
});

describe("Test win condition functions", () => {
  it("executeCycleSearch with empty history", () => {
    const genHistory = [] as string[];
    const isCycleFound = executeCycleSearch(genHistory);
    expect(isCycleFound).toBe(false);
  });

  it("executeCycleSearch with filled history", () => {
    const genHistory = [
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
    ];
    const isCycleFound = executeCycleSearch(genHistory);
    expect(isCycleFound).toBe(true);
  });

  const testPattern = ["['true', 'true', 'true']", "['true', 'false', 'true']"];

  const filledHistoryFirst = new Array(5).fill(testPattern.slice().reverse());
  const filledHistorySecond = [
    ...new Array(6).fill("['false', 'false', 'false']"),
    ...testPattern.slice().reverse(),
    ...testPattern.slice().reverse(),
  ];

  it("find cycle with empty history", () => {
    const genHistory = [] as string[];
    expect(findCycle(genHistory)).toEqual(false);
  });

  it("find cycle with filled history", () => {
    expect(findCycle(filledHistoryFirst)).toEqual(true);
  });

  it("find pattern with empty history", () => {
    const genHistory = [] as string[];
    const expectedPattern = [] as string[];
    const pattern = findPattern(genHistory);
    expect(pattern).toMatchObject(expectedPattern);
  });

  it("find pattern with filled history", () => {
    const pattern = findPattern(filledHistorySecond);
    expect(JSON.stringify(pattern)).toEqual(JSON.stringify(testPattern));
  });
});
