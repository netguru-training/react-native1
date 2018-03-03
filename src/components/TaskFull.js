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
    // this.setState({
    //   description: arr,
    //   item: ""
    // });
    return this.state.description;
    // this.save(arr);
  };
  // save = arr => {
  //   AsyncStorage.setItem("items", JSON.stringify(arr));
  // };
  render() {
    return (
      <View style={styles.taskFullContainer}>
        <Text style={styles.taskFullName}>{data[0].name}</Text>
        <View style={styles.taskFullDescriptionContainer}>
          <TextInput
            onSubmitEditing={this.onEditDescription}
            placeholder="Add description"
            returnKeyType="done"
            onChangeText={this.onChangeText}
            value={this.state.item}
          />
          <Text style={styles.taskFullDescription}>{this.onEditDescription}</Text>
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
    marginTop: 10,
    backgroundColor: "transparent",
    width: 0.95 * width,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.3)"
  },
  taskFullName: {
    fontSize: 30,
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
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
