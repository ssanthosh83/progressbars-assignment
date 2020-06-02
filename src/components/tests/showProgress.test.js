import React from "react";
import { shallow, mount, render } from "enzyme";
import ShowProgress from "./../showProgress";

const essentialProps = {
  bar: 10,
  limit: 100,
  index: 1,
  displayProgressBar: jest.fn(),
};

describe("ShowProgress Testing", () => {
  it("should render essential properties as props", () => {
    const wrapper = shallow(<ShowProgress {...essentialProps} />);
    expect(
      JSON.stringify(wrapper.find("div.progress").props()["children"])
    ).toMatch(
      '"aria-valuenow":' +
        essentialProps.bar +
        ',"aria-valuemin":"0","aria-valuemax":' +
        essentialProps.limit
    );
  });
});
