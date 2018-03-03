import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

class TaskItem extends Component {

  renderDoneButton(isCompleted) {
    if (isCompleted) {
      return (
        <Button
          onPress={() => {
            this.props.checkItemWithId(this.props.item.id)
          }}
          title="Checked!"
          color="#841584"
        />
      );
    }
    return (
      <Button
        onPress={() => {
          this.props.checkItemWithId(this.props.item.id)
        }}
        title="Unchecked"
        color="#841584"
      />
    );
  }

  render() {
    const { name, isCompleted, id } = this.props.item;

    return (
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <View style={{flex: 3}}>{this.renderDoneButton(isCompleted)}</View>
        <View style={{flex: 5}}>
        <TouchableOpacity onPress={ () => {} }>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TaskItem;
