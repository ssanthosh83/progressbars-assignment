import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { shallow } from "enzyme";
import ProgressBar from "./components/progressBar";

describe("ProgressBars Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("ensure that the ProgressBar is rendered once from the App", () => {
    expect(wrapper.find(ProgressBar)).toHaveLength(1);
  });

  test("renders children when passed in", () => {
    expect(wrapper.contains(<ProgressBar />)).toEqual(true);
  });
});
