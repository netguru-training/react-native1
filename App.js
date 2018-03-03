import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './src/components/TaskList'
import TaskFull from './src/components/TaskFull'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TaskList />
        <TaskFull />
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
