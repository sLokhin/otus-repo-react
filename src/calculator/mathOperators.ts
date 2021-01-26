export type ScalarOperationType = (first: number, second: number) => number;
export type SingleOperandType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const factorial: SingleOperandType = (
  first: number
): number => first ? first * factorial(first - 1) : 1;

export const doublePow: SingleOperandType = (
  first: number
): number => Math.pow(first, 2);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "!": factorial,
  "**": doublePow
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "^": ZERO,
  "**": ZERO,
  "!": ZERO,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
