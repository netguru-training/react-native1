import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import dummyData from './dummyData';
import TaskList from './TaskList';

export default class MainList extends React.Component {
  state = {
    items: [],
    item: {}
  };

  constructor() {
    super();
    AsyncStorage.getItem('items').then(itemsJSON => {
      if (itemsJSON) {
        this.setState({
          items: JSON.parse(itemsJSON)
        });
      }
    });
  }

  componentWillMount() {
    this.setState({ items: dummyData });
  }

  onChangeText = text => {
    this.setState({
      item: { name: text, id: Math.random(), desc: '', isCompleted: false }
    });
  };
  onNewItem = e => {
    const arr = [this.state.item, ...this.state.items];
    this.setState({
      items: arr
    });
    this.save(arr);
  };

  checkItemWithId = id => {
    console.log('CLICK', this.state.items);

    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
        return item;
      }
      return item;
    });
    this.setState({ items: items });
  };

  editDescription = (description, id) => {
    const item = this.state.items.map(item => {
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
    this.save(arr);
  };

  save = arr => {
    AsyncStorage.setItem('items', JSON.stringify(arr));
  };

  moveToScreen = id => {
    const item = this.state.items.filter(item => item.id === id)[0];
    console.log('wybrany item', item);
    this.props.navigation.navigate('TaskFull', { item: item });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingTop: 20 }}>
          <Text>TO DO LIST</Text>
        </View>
        <TextInput
          onSubmitEditing={this.onNewItem}
          placeholder="TODO: Title"
          returnKeyType="done"
          onChangeText={this.onChangeText}
          value={this.state.item.name}
        />
        <TaskList
          style={{ flex: 1 }}
          data={this.state.items}
          checkItemWithId={this.checkItemWithId}
          editDescription={this.editDescription}
          moveToScreen={this.moveToScreen}
        />
      </View>
    );
  }
}
