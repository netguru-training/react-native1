import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import TaskList from "./src/components/TaskList";
import MainList from "./src/components/MainList";

import MainNavigator from './src/MainNavigator'

export default class App extends React.Component {
  

  render() {
  return (
    <MainNavigator/>

    );
  }
}
