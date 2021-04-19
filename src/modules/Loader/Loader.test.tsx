import React from "react";
import { mount } from "enzyme";
import { Loader, LoaderLayout, LoaderLabel } from "./Loader";
import CircularProgress from "@material-ui/core/CircularProgress";

describe("Loader test", () => {
  it("layout Loader", () => {
    const loader = mount(<Loader />);

    expect(loader.find(LoaderLayout).length).toBe(1);
    expect(loader.find(CircularProgress).length).toBe(1);
    expect(loader.find(LoaderLabel).length).toBe(1);

    const textLabel = loader.find(LoaderLabel).first();
    expect(textLabel.text()).toEqual("... LOADING ...");
  });
});
