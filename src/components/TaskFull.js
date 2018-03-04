import { View, Text, StyleSheet, Dimensions, TextInput, Button } from "react-native";
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
          blurOnSubmit
          clearButtonMode="while-editing"
        />
        <View style={styles.taskFullDescriptionContainer}>
          <TextInput
            style={styles.taskFullDescription}
            onSubmitEditing={this.onEditDescription}
            placeholder="Add description"
            returnKeyType="done"
            onChangeText={this.onChangeDescriptionText}
            value={this.state.description}
            textBreakStrategy="simple"
            multiline
            blurOnSubmit
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
    backgroundColor: "#f1f2f6"
  },
  taskFullDescription: {
    fontSize: 20,
    textAlign: "center",
    color: "#57606f",
    top:50
  }
});

export default TaskFull;
