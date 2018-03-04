import "react-native";
import React from "react";
import App from "../../App";

import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);
describe("Rendering", () => {
  test("", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
