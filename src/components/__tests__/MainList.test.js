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
const spyOnEditDescription = jest.spyOn(instance, "editDescription");
const spyOnEditName = jest.spyOn(instance, "editName");
const spyOnMoveToScreen = jest.spyOn(instance, "moveToScreen");
const spyOnRemoveItemWithId = jest.spyOn(instance, "removeItemWithId");
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
  test("When I call the onNewItem function, it adds the item to toDoList", () => {
    instance.onNewItem();
    expect(wrapper.state().toDoItems.length).toBe(5);
  });
  test("When I pass 2 to checkItemWithId function, the item with passed it should be moved to doneItems list.", () => {
    instance.checkItemWithId(2);
    expect(wrapper.state().doneItems.length).toBe(1);
  });
  test("When I call editDescription function, it finds the correct item and edit description in it", () => {
    const id = 3;
    const desc = "wall";
    instance.editDescription(desc, id);
    expect(spyOnEditDescription).toHaveBeenCalled();
    expect(wrapper.state().toDoItems[id].desc).toBe(desc);
  });
  test("When I call editName function, it finds the correct item and edit name in it", () => {
    const id = 1;
    const name = "manamana";
    const element = wrapper.state().toDoItems.find(item => item.id === id);
    instance.editName(name, id);
    expect(spyOnEditName).toHaveBeenCalled();
    expect(element.name).toBe(name);
  });
  test("When I call moveToScreen function, I should open taskFull screen with current Id", () => {
    const id = 1;
    const wrapperNew = shallow(
      <MainList navigation={{ navigate: jest.fn() }} />
    );
    const instanceNew = wrapperNew.instance();
    instanceNew.moveToScreen(id);
  });
  test("When I call removeItemWithId function, it should remove the task", () => {
    const id = 1;
    expect(wrapper.state().toDoItems.length).toBe(4);
    instance.removeItemWithId(id);
    expect(wrapper.state().toDoItems.length).toBe(3);
  });
});
