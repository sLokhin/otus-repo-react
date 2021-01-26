import { zeroPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("zeroPrioritiesCalc simple cases", () => {
  it("[0, !]", () => {
    expect(zeroPrioritiesCalc([0, "!"])).toEqual([1]);
  });

  it("[3, !, !]", () => {
    expect(zeroPrioritiesCalc([3, "!", "!"])).toEqual([720]);
  });

  it("[3, !, **]", () => {
    expect(zeroPrioritiesCalc([3, "!", "**"])).toEqual([36]);
  });

  it("[5, !, **]", () => {
    expect(zeroPrioritiesCalc([5, "!", "**"])).toEqual([14400]);
  });
});

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 26]", () => {
    expect(firstPrioritiesCalc([1, "*", 26])).toEqual([26]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[26, + 26]", () => {
    expect(firstPrioritiesCalc([26, "+", 26])).toEqual([26, "+", 26]);
  });
});

describe("zeroPrioritiesCalc mixed with first priorities cases", () => {
  it("[100, -, 2, **, !, +, 500]", () => {
    expect(zeroPrioritiesCalc([100, "-", 2, "**", "!", "+", 500])).toEqual([
      100,
      "-",
      24,
      "+",
      500
    ]);
  });
});

describe("zeroPrioritiesCalc mixed with first and second priorities cases", () => {
  it("[5, **, *, 2, ^, 2, !, +, 1]", () => {
    expect(zeroPrioritiesCalc([5, "**", "*", 2, "^", 2, "!", "+", 1])).toEqual([
      25,
      "*",
      24,
      "+",
      1
    ]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 16, +, 5, *, 20]", () => {
    expect(firstPrioritiesCalc([32, "/", 16, "+", 5, "*", 20])).toEqual([
      2,
      "+",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
