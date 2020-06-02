import React from "react";
import { shallow, mount, render } from "enzyme";
import ProgressBar from "./../progressBar";
import HttpService from "./../../services/httpService";

const mockBars = {
  buttons: [35, 37, -42, -26],
  bars: [87, 65, 76],
  limit: 120,
};

jest.mock("./../../services/httpService", () => {
  getBars: () => mockBars;
});

describe("ProgressBar Component Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProgressBar />);
  });

  test("ensure that there are 4 states variables in the App", () => {
    expect(wrapper.find(".bars")).toHaveLength(0);
    expect(wrapper.find(".buttons")).toHaveLength(0);
    expect(wrapper.find(".limit")).toHaveLength(0);
    expect(wrapper.find(".selectedBar")).toHaveLength(0);
  });

  it("should render as expected", async () => {
    const wrapper = await shallow(<ProgressBar />);
    console.log(wrapper.debug());
    expect(wrapper.find("ShowProgress").length).toBe(mockBars.bars.length);
  });
});
