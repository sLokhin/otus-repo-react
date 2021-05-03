import { takeEvery, call, put } from "redux-saga/effects";
import { actions, possibleState, HISTORY_BUFFER } from "./reducer";
import { store } from "@/redux/store";
import { SagaIterator } from "@redux-saga/types";

const findPattern = (genHistory: string[]): string[] => {
  const pattern: string[] = [];
  for (let i = genHistory.length - 1; i >= 0; i--) {
    const currentGen = genHistory[i];
    if (!pattern.includes(currentGen)) {
      pattern.push(currentGen);
    } else {
      break;
    }
  }
  return pattern;
};

const checkHistoryOnCycle = (
  verifiableHistory: string[],
  pattern: string[]
): boolean => {
  const length1 = verifiableHistory.length;
  const length2 = pattern.length;
  let result = true;
  for (let i = 0; i < length1; i++) {
    console.log("counter", i);
    const currentGen = verifiableHistory[i];
    const patternPart = pattern[i % length2];
    if (currentGen !== patternPart) {
      result = false;
      break;
    }
  }
  return result;
};

const findCycle = (genHistory: string[]): boolean => {
  const pattern = findPattern(genHistory);
  const patternLength = pattern.length;
  const possibleCyclesAmount = Math.trunc(HISTORY_BUFFER / patternLength);

  console.log(
    "FULL HISTORY ",
    patternLength,
    possibleCyclesAmount,
    store.getState().gameProcessState.genCounter
  );

  if (possibleCyclesAmount > 1) {
    const length = possibleCyclesAmount * patternLength;
    const verifiableHistory = genHistory.slice(-length).reverse();
    console.log(verifiableHistory.length);
    return checkHistoryOnCycle(verifiableHistory, pattern);
  } else {
    return false;
  }
};

const executeCycleSearch = () => {
  const genHistory = store.getState().gameProcessState.genHistory;
  if (genHistory.length < HISTORY_BUFFER) {
    return false;
  } else {
    return findCycle(genHistory);
  }
};

export function* checkWinConditionSaga(): SagaIterator {
  const isCycleFound = yield call(executeCycleSearch);
  if (isCycleFound) {
    yield put(actions.setGameState(possibleState.finish));
  }
  console.log("IS CYCLE FOUND ", isCycleFound);
}

export function* gameSaga(): SagaIterator {
  yield takeEvery(actions.pushGenToHistory, checkWinConditionSaga);
}
