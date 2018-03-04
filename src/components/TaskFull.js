import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import React, { Component } from "react";
import data from "./dummyData";

const { height, width } = Dimensions.get("window");
class TaskFull extends Component {
  state = {
    description: ""
  };
  onChangeText = text => {
    this.setState({
      description: text
    });
  };
  onEditDescription = () => {
    this.props.editDescription(this.state.description)
    return this.state.description;
  };
  render() {
    const { params } = this.props.navigation.state;

    const item = params.item
    return (
      <View style={styles.taskFullContainer}>
        <Text style={styles.taskFullName}>{item.name}</Text>
        <View style={styles.taskFullDescriptionContainer}>
          <TextInput
            onSubmitEditing={this.onEditDescription}
            placeholder="Add description"
            returnKeyType="done"
            onChangeText={this.onChangeText}
            value={this.state.item}
          />
          <Text style={styles.taskFullDescription}>{item.description}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  taskFullContainer: {
    flex: 1,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: 1 * width
  },
  taskFullName: {
    fontSize: 30,
    flex: 1,
    width: "100%",
    backgroundColor: "#ff7f50",
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  taskFullDescriptionContainer: {
    width: "100%",
    flex: 6,
    backgroundColor: "lightgray"
  },
  taskFullDescription: {
    fontSize: 24
  }
});

export default TaskFull;
