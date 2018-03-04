import { LayoutAnimation } from "react-native";
import React from "react";
import MainList from "../MainList";

import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const wrapper = shallow(<MainList />);
const instance = wrapper.instance();
const spyOnChangeText = jest.spyOn(instance, "onChangeText");
const spyOnCheckItemWithId = jest.spyOn(instance, "checkItemWithId");
const spyOnNewItem = jest.spyOn(instance, "onNewItem");
const layoutAnimation = jest.mock("LayoutAnimation", () => ({
  spring: jest.fn()
}));

describe("Rendering", () => {
  test("Component with default props", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
describe("Actions", () => {
  test("When I pass XXXX to onChangeText function, I should get item state XXXX", () => {
    instance.onChangeText("XXXX");
    expect(spyOnChangeText).toHaveBeenCalled();
    expect(wrapper.state().item.name).toBe("XXXX");
  });
  test("When I pass 2 to checkItemWithId function, the item with passed it should be moved to doneItems list.", () => {
    instance.checkItemWithId(2);
    expect(wrapper.state().doneItems.length).toBe(1);
  });
  test('When I call the onNewItem function, it adds the item to toDoList', ()=> {
      instance.onNewItem();
      expect(wrapper.state().toDoItems.length).toBe(4);
  })
  test('')
});
