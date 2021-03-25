import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { App, AppContext, initialState } from "./App";
import { Loader } from "../../Components/Loader/Loader";

import { MemoryRouter } from "react-router";

import { LoginPage } from "../../Pages/LoginPage";
import { GamePage } from "../../Pages/GamePage";

import { delay } from "../../Utils/delay";
import * as authFunctions from "../../API/auth";

describe("App routing test", () => {
  it("initial route", async () => {
    const delayFromTest = jest.fn(() => new Promise((r) => setTimeout(r, 50)));

    jest.mock("../../Utils/delay", () => ({
      delay: jest.fn(() => {
        console.log("NEW MOCKED DELAY");
        return new Promise((r) => setTimeout(r, 0));
      }),
    }));

    jest.mock("../../API/auth", () => ({
      login: jest.fn(() => {
        console.log("NEW MOCKED login");
      }),
      logout: jest.fn(() => {
        console.log("NEW MOCKED logout");
      }),
      isLoggedIn: jest.fn(() => {
        console.log("NEW MOCKED isLoggedIn");
      }),
      getPlayerName: jest.fn(() => {
        console.log("NEW MOCKED getPlayerName");
      }),
    }));

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

    await delayFromTest();
    console.log(wrapper!.html());
    expect(wrapper!.find(LoginPage)).toHaveLength(1);
  });
});
