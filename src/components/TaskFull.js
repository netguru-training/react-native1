import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import React, { Component } from "react";
import data from "./dummyData";

const { height, width } = Dimensions.get("window");
class TaskFull extends Component {
  state = {
    description: this.props.navigation.state.params.item.desc || "",
    name: this.props.navigation.state.params.item.name || ""
  };
  onChangeDescriptionText = text => {
    this.setState({
      description: text
    });
  };
  onChangeNameText = text => {
    this.setState({
      name: text
    });
  };
  onEditDescription = () => {
    const { id, desc } = this.props.navigation.state.params.item;
    this.props.navigation.state.params.editDescription(
      this.state.description,
      id
    );
  };
  onEditName = () => {
    const { id, name } = this.props.navigation.state.params.item;
    this.props.navigation.state.params.editName(this.state.name, id);
  };

  render() {
    const { id, desc, name } = this.props.navigation.state.params.item;
    const { params } = this.props.navigation.state;

    const item = params.item;

    return (
      <View style={styles.taskFullContainer}>
        <TextInput
          style={styles.taskFullName}
          onSubmitEditing={this.onEditName}
          placeholder="Add name"
          returnKeyType="done"
          onChangeText={this.onChangeNameText}
          value={this.state.name}
        />
        <View style={styles.taskFullDescriptionContainer}>
          <TextInput
            style={styles.taskFullDescription}
            onSubmitEditing={this.onEditDescription}
            placeholder="Add description"
            returnKeyType="done"
            onChangeText={this.onChangeDescriptionText}
            value={this.state.description}
          />
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
