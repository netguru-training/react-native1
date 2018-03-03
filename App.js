import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './src/components/TaskList'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        items: [
            { title: ' ',
            desc: ' ',
            complete: false }
        ]
    };
    this.deleteItem = this.deleteItem.bind(this);

    deleteItem(index) {
        var items = this.state.items;
        items.splice(index, 1);
        this.setState({items: items})
    }

  render() {
    return (
      <View style={styles.container}>
        <TaskList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
