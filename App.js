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

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainList />
      </View>
    );
  }
}
