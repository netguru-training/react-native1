import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  LayoutAnimation, 
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Item, Input, Icon } from 'native-base';
import dummyData from './dummyData';
import TaskList from './TaskList';
import { Spinner}  from './Spinner'

export default class MainList extends React.Component {

  constructor(props) {
    super(props)
    this.saveToStorage = this.saveToStorage.bind(this)
    this.getStorage = this.getStorage.bind(this)
  }

  state = {
    toDoItems: [],
    doneItems: [],
    item: {},
    isReady: false
  };

  static navigationOptions = {
    title: 'Tasks'
  };

  componentWillMount() {
    this.getStorage()
  }


  onChangeText = text => {
    this.setState({
      item: { name: text, id: Math.random(), desc: '', isCompleted: false }
    }, this.saveToStorage);
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
      }, this.saveToStorage);
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
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList }, this.saveToStorage);
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
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList }, this.saveToStorage);
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
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList }, this.saveToStorage);
  };

  moveToScreen = id => {
    const allItems = [...this.state.toDoItems, ...this.state.doneItems];
    const item = allItems.filter(item => item.id === id)[0];
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

    const newToDoList = allItems.filter(item => !item.isCompleted);
    const newDoneList = allItems.filter(item => item.isCompleted);

    LayoutAnimation.spring();
    this.setState({ toDoItems: newToDoList, doneItems: newDoneList }, this.saveToStorage);

  };

  async getStorage() {
    try {
      const toDoItems = await AsyncStorage.getItem('toDoItems');
      const doneItems = await AsyncStorage.getItem('doneItems');

        this.setState({toDoItems: JSON.parse(toDoItems),doneItems: JSON.parse(doneItems), isReady: true})
      }
    } catch (error) {
      console.log("Error - on getting data from storage")
    }
  }

  async saveToStorage() {
     try {
    await AsyncStorage.setItem('toDoItems', JSON.stringify(this.state.toDoItems));
    await AsyncStorage.setItem('doneItems', JSON.stringify(this.state.doneItems));
  } catch (error) {
    console.log("Error - on saving data to storage")
  }
  }
 

  render() {
    if (!this.state.isReady) {
      return <Spinner size='large'/>
    } else {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingLeft: 4, paddingTop: 4, paddingRight: 4 }}>
          <Item rounded>
            <Icon style={{color: "#ff7f50"}} active name='md-add-circle' />
            <Input

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
}
