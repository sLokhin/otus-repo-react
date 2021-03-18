import React from "react";
import { mount } from "enzyme";
import { GameHeader } from "./GameHeader";
import { AppContext } from "../App/App";

describe("GameHeader test", () => {
  it("submit GameHeader", () => {
    const onLogout = jest.fn();
    const gameHeader = mount(<GameHeader onLogout={onLogout} />, {
      wrappingComponent: AppContext.Provider,
      wrappingComponentProps: {
        value: [{ name: "Player Name from Test" }],
      },
    });

    const labelWrapper = gameHeader.find(".label-wrapper").first();
    const iconWrapper = gameHeader.find(".icon-wrapper").first();

    iconWrapper.simulate("click");
    expect(labelWrapper.text()).toEqual("Player Name from Test");
    expect(onLogout).toHaveBeenCalled();
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});
