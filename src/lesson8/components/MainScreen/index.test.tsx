import React from "react";
import { mount } from "enzyme";
import { MainScreen } from "../MainScreen";
import { getRandomNumber, createURL, QuestionLink } from "../../Utils/utils";

describe("MainScreen", () => {
  it("test getRandomNumber function correct params", () => {
    for (let i = 0; i < 10; i++) {
      const randomNumber = getRandomNumber(0, 3);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(4);
    }
  });

  it("test getRandomNumber function wrong params", () => {
    expect(() => getRandomNumber(1, 0)).toThrow();
  });

  it("test getRandomNumber function wrong params", () => {
    expect(() => getRandomNumber(5, 3)).toThrow(
      "getRandomNumber function: 'min' should not be greater than 'max'"
    );
  });

  it("test createURL function", () => {
    const testID = 99;
    expect(createURL(testID)).toBe(`${QuestionLink}/${testID}`);
    expect(createURL(testID)).toBe(`${QuestionLink}/99`);
    expect(createURL(testID)).not.toBe(`${QuestionLink}/98`);
    expect(createURL(testID)).not.toBe(`${QuestionLink}/100`);

    expect(createURL(0)).toBe(`${QuestionLink}/0`);
    expect(createURL(-15)).toBe(`${QuestionLink}/-15`);
    expect(createURL(15)).toBe(`${QuestionLink}/15`);

    const randomNumber = getRandomNumber(0, 100);
    expect(createURL(testID)).toBe(`${QuestionLink}/${testID}`);
    expect(createURL(testID)).not.toBe(`${QuestionLink}/${testID - 1}`);
    expect(createURL(testID)).not.toBe(`${QuestionLink}/${testID + 1}`);
  });

  it("render MainSreen", () => {
    const field = mount(<MainScreen />);
    expect(field.find("QuestionWindow").length).toBe(1);
    expect(field.find("ButtonWrapper").length).toBe(1);
    expect(field.find("AnswerButton").length).toBe(2);
  });
});
