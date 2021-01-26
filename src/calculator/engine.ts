import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
  ScalarOperationType,
  SingleOperandType
} from "./mathOperators";

const [ZERO, FIRST, SECOND] = mathPriorities;

const isSingleOpearandFunction = (operand: string): boolean => {
  return ["!", "**"].includes(operand);
}

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  const specialEndingSymbol: string = "$endOfMass"
  const lastInitMassItem = stack[stack.length - 1]

  if (isSingleOpearandFunction(String(lastInitMassItem))) {
    stack.push(specialEndingSymbol)
  }

  const resultMass = stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    let operator, operandsCount, resultNumber;

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === ZERO) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }

      if (isSingleOpearandFunction(String(item))) {
        operandsCount = 1;
        operator = mathOperators[String(item)] as SingleOperandType;
        resultNumber = operator(Number(prevItem));
      } else {
        operandsCount = 2;
        operator = mathOperators[String(item)];
        resultNumber = operator(Number(prevItem), Number(nextItem));
      }

      result = [
        ...result.slice(0, -2),
        resultNumber,
      ];

      if (operandsCount === 1) {
        result.push(nextItem)
      }

    } else {
      result.push(nextItem);
    }
    return result;

  }, []);

  let finalMass = [...resultMass];
  if (resultMass[resultMass.length - 1] === specialEndingSymbol) {
    finalMass = finalMass.slice(0, -1)
  }
  return finalMass;
}

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;

  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
