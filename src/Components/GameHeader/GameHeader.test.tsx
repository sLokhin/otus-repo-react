import React from "react";
import { mount } from "enzyme";
import { GameHeader, IconWrapper, LabelWrapper } from "./GameHeader";

describe("GameHeader test", () => {
  it("submit GameHeader", () => {
    const testName = "Player-name-from-test";
    const onLogout = jest.fn();
    const gameHeader = mount(
      <GameHeader name={testName} onLogout={onLogout} />
    );

    const labelWrapper = gameHeader.find(LabelWrapper).first();
    const iconWrapper = gameHeader.find(IconWrapper).first();

    iconWrapper.simulate("click");
    expect(labelWrapper.text()).toEqual(testName);
    expect(onLogout).toHaveBeenCalled();
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});
