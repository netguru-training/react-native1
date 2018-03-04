import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
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
    const arr = [this.state.item, ...this.state.toDoItems];
    LayoutAnimation.spring();
    this.setState({
      toDoItems: arr,
      item: {}
    });
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
    const item = allItems.map(item => {
      item.id === id
        ? (item = {
            id: item.id,
            name: item.name,
            description: description,
            isCompleted: item.isCompleted
          })
        : item;
    });

    const arr = [item, ...this.state.items];
    this.setState({
      items: arr
    });
  };

  moveToScreen = id => {
    const allItems = [...this.state.toDoItems, ...this.state.doneItems];
    const item = allItems.filter(item => item.id === id)[0];
    console.log('wybrany item', item);
    this.props.navigation.navigate('TaskFull', {
      item: item,
      editDescription: this.editDescription
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
    console.log('allitems', allItems)

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
          editDescription={this.editDescription}
          moveToScreen={this.moveToScreen}
          removeItemWithId={this.removeItemWithId}
        />
      </View>
    );
  }
}
