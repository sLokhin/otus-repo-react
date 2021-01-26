import { isNumber } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

const isSingleOpearandFunction = (operand: string): boolean => {
  return ["!", "**"].includes(operand);
}

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");
  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
    (isNumber(prevItem) || isSingleOpearandFunction(prevItem)) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    const isValidSingleOperandOpearatorPush =
      (isNumber(prevItem) || isSingleOpearandFunction(prevItem)) &&
      !isNumber(item) &&
      isSingleOpearandFunction(item)
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else if (isValidSingleOperandOpearatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
