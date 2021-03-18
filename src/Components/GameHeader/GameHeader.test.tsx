import React from "react";
import { mount } from "enzyme";
import { GameHeader } from "./GameHeader";

describe("GameHeader test", () => {
  it("submit GameHeader", () => {
    const onLogout = jest.fn();
    const gameHeader = mount(<GameHeader onLogout={onLogout} />);
    gameHeader.find("IconWrapper").simulate("click");
    expect(onLogout).toHaveBeenCalled();
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});
