import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './src/components/TaskList'

export default class App extends React.Component {
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
    flex: 1
  },
});
