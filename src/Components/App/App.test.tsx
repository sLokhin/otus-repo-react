import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { App, AppContext, initialState } from "./App";
import { Loader } from "../../Components/Loader/Loader";

import { MemoryRouter } from "react-router";

import { LoginPage } from "../../Pages/LoginPage";
import { GamePage } from "../../Pages/GamePage";

import { delay } from "../../Utils/delay";

describe("App routing test", () => {
  it("initial route", async () => {
    const mockDelay = jest.fn(
      (): Promise<null> => new Promise((r) => setTimeout(r, 0))
    );

    let wrapper;
    act(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>,
        {
          wrappingComponent: AppContext.Provider,
          wrappingComponentProps: {
            value: [initialState, jest.fn()],
          },
        }
      );
    });

    await delay(2000);
    console.log(wrapper!.html());
    expect(wrapper!.find(LoginPage)).toHaveLength(1);
  });
});
