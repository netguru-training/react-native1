import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Item, Input } from 'native-base';
import dummyData from './dummyData';
import TaskList from './TaskList';

export default class MainList extends React.Component {
  state = {
    toDoItems: [],
    doneItems: [],
    item: {}
  };

  static navigationOptions = {
    title: 'Tasks'
  };

  componentWillMount() {
    this.setState({ toDoItems: dummyData });
  }

  onChangeText = text => {
    this.setState({
      item: { name: text, id: Math.random(), desc: '', isCompleted: false }
    });
  };

  onNewItem = e => {
    if (!this.state.item.name || this.state.item.name.replace(/\s+/g, '') === '' ) {
      return;
    } else {
      const arr = [this.state.item, ...this.state.toDoItems];
      LayoutAnimation.spring();
      this.setState({
        toDoItems: arr,
        item: {}
      });
    }
  };

  checkItemWithId = id => {
    const allItems = [...this.state.toDoItems, ...this.state.doneItems];
    const itemsAfterChecking = allItems.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });

    const newToDoList = itemsAfterChecking.filter(item => !item.isCompleted);
    const newDoneList = itemsAfterChecking.filter(item => item.isCompleted);

    LayoutAnimation.spring();
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList });
  };

  editDescription = (description, id) => {
    const allItems = [...this.state.toDoItems, ...this.state.doneItems];
    const items = allItems.map(item => {
      if (item.id === id) {
        item.desc = description;
        return item;
      }
      return item;
    });

    const newToDoList = items.filter(item => !item.isCompleted);
    const newDoneList = items.filter(item => item.isCompleted);

    LayoutAnimation.spring();
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList });
  };

  editName = (name, id) => {
    const allItems = [...this.state.toDoItems, ...this.state.doneItems];
    const items = allItems.map(item => {
      if (item.id === id) {
        item.name = name;
        return item;
      }
      return item;
    });
    const newToDoList = items.filter(item => !item.isCompleted);
    const newDoneList = items.filter(item => item.isCompleted);

    LayoutAnimation.spring();
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList });
  };

  moveToScreen = id => {
    const allItems = [...this.state.toDoItems, ...this.state.doneItems];
    const item = allItems.filter(item => item.id === id)[0];
    console.log('wybrany item', item);
    this.props.navigation.navigate('TaskFull', {
      item: item,
      editDescription: this.editDescription,
      editName: this.editName
    });
  };

  removeItemWithId = id => {
    var allItems = [...this.state.toDoItems, ...this.state.doneItems];
    const item = allItems.filter(item => item.id === id)[0];

    const index = allItems.indexOf(item);
    allItems.splice(index, 1);
    console.log('allItems', allItems);
    console.log('item', item);
    console.log('index', index);
    console.log('allitems', allItems);

    const newToDoList = allItems.filter(item => !item.isCompleted);
    const newDoneList = allItems.filter(item => item.isCompleted);

    LayoutAnimation.spring();
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingLeft: 4, paddingTop: 4, paddingRight: 4 }}>
          <Item regular>
            <Input
              style={{ backgroundColor: '#fff' }}
              onSubmitEditing={this.onNewItem}
              placeholder="Enter Your New Task"
              returnKeyType="done"
              onChangeText={this.onChangeText}
              value={this.state.item.name}
            />
          </Item>
        </View>
        <TaskList
          style={{ flex: 1 }}
          toDoItems={this.state.toDoItems}
          doneItems={this.state.doneItems}
          checkItemWithId={this.checkItemWithId}
          moveToScreen={this.moveToScreen}
          removeItemWithId={this.removeItemWithId}
        />
      </View>
    );
  }
}
