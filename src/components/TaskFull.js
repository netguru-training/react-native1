<<<<<<< HEAD
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Button } from "react-native";
import data from "./dummyData";
=======
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  Keyboard
} from 'react-native';
import React, { Component } from 'react';
import data from './dummyData';
import { StackNavigator } from 'react-navigation';
>>>>>>> 1aaabfc2e896c9cd96553a0ffd794ba3355e1a13

const { height, width } = Dimensions.get('window');
class TaskFull extends Component {
  state = {
    description: this.props.navigation.state.params.item.desc || '',
    name: this.props.navigation.state.params.item.name || '',
    isCompleted: this.props.navigation.state.params.item.isCompleted || false
  };
<<<<<<< HEAD
  componentWillMount() {
    console.log(
      this.props.navigation.state.params.item.desc
    )
  }
=======

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <Button
          onPress={() => {
            params.saveChanges();
            Keyboard.dismiss();
          }}
          title="Save"
          color="#2D7CF6"
        />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ saveChanges: this.saveChanges });
  }

  saveChanges = () => {
    const { id, desc, name } = this.props.navigation.state.params.item;
    this.props.navigation.state.params.editDescription(
      this.state.description,
      id
    );
    this.props.navigation.state.params.editName(this.state.name, id);
  };

>>>>>>> 1aaabfc2e896c9cd96553a0ffd794ba3355e1a13
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
<<<<<<< HEAD
  
  render() {
    console.log(this.state)
    const { id, desc, name } = this.props.navigation.state.params.item;
    const { params } = this.props.navigation.state;
    
    const item = params.item;
    
    return (
      <View style={styles.taskFullContainer}>
      <TextInput
      style={styles.taskFullName}
=======

  checkCompleted = () => {
    const { id, isCompleted } = this.props.navigation.state.params.item;

    if (isCompleted === false) {
      return (
        <TextInput
          style={styles.taskFullName}
>>>>>>> 1aaabfc2e896c9cd96553a0ffd794ba3355e1a13
          onSubmitEditing={this.onEditName}
          placeholder="Add name"
          returnKeyType="done"
          onChangeText={this.onChangeNameText}
          value={this.state.name}
          blurOnSubmit
          clearButtonMode="while-editing"
          underlineColorAndroid="transparent"
        />
      );
    } else {
      return (
        <TextInput
          style={styles.taskFullNameCompleted}
          onSubmitEditing={this.onEditName}
          placeholder="Add name"
          returnKeyType="done"
          onChangeText={this.onChangeNameText}
          value={this.state.name}
          blurOnSubmit
          clearButtonMode="while-editing"
          underlineColorAndroid="transparent"
        />
      );
    }
  };

  render() {
    const {
      id,
      desc,
      name,
      isCompleted
    } = this.props.navigation.state.params.item;
    const { params } = this.props.navigation.state;

    const item = params.item;

    return (
      <View style={styles.taskFullContainer}>
        {this.checkCompleted(isCompleted)}
        <View style={styles.taskFullDescriptionContainer}>
          <TextInput
            style={styles.taskFullDescription}
            onSubmitEditing={this.onEditDescription}
            placeholder="Add description"
            // returnKeyType=""
            onChangeText={this.onChangeDescriptionText}
            value={this.state.description}
            textBreakStrategy="simple"
            multiline
            // blurOnSubmit
            underlineColorAndroid="transparent"
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: 1 * width
  },
  taskFullName: {
    fontSize: 30,
    flex: 1,
    width: '100%',
    backgroundColor: '#ff7f50',
    textAlign: 'center',
    color: '#FFFFFF',
    paddingRight: 20,
    paddingLeft: 20
  },
  taskFullNameCompleted: {
    fontSize: 30,
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
    textAlign: 'center',
    color: '#FFFFFF',
    paddingRight: 20,
    paddingLeft: 20
  },
  taskFullDescriptionContainer: {
    width: '100%',
    flex: 6,
    paddingHorizontal: 20,
    backgroundColor: '#f1f2f6'
  },
  taskFullDescription: {
    fontSize: 20,
    textAlign: 'center',
    color: '#57606f',
    top: 50
  }
});

export default TaskFull;
