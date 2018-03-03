import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

class TaskItem extends Component {
  state = this.props.item;

  renderDoneButton(isCompleted) {
    if (isCompleted) {
      return (
        <Button
          onPress={() => {
            this.setState({ isCompleted: false });
          }}
          title="Checked!"
          color="#841584"
        />
      );
    }
    return (
      <Button
        onPress={() => {
          this.setState({ isCompleted: true });
        }}
        title="Unchecked"
        color="#841584"
      />
    );
  }

  render() {
    const { name, isCompleted } = this.props.item;

    console.log(name);
    console.log(isCompleted);

    return (
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <View style={{flex: 3}}>{this.renderDoneButton(this.state.isCompleted)}</View>
        <View style={{flex: 5}}>
        <TouchableOpacity onPress={ () => {console.log("Go to task view")} }>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TaskItem;
