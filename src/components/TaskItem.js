import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SwipeRow, Icon, Button, CheckBox, ListItem, Body } from 'native-base';

class TaskItem extends Component {
  renderDoneButton(isCompleted) {
    return (
      <CheckBox
        checked={isCompleted}
        onPress={() => {
          this.props.checkItemWithId(this.props.item.id);
        }}
      />
    );
  }

  render() {
    const { name, isCompleted, id } = this.props.item;

    return (
      <SwipeRow
        rightOpenValue={-75}
        leftOpenValue={75}
        body={
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              {this.renderDoneButton(isCompleted)}
            </View>
            <View style={{ flex: 5, justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.props.moveToScreen(id)}>
                <Text style={{ fontSize: 16 }}>{name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        left={
          <Button success onPress={() => this.props.moveToScreen(id)}>
            <Icon active name="md-information-circle" />
          </Button>
        }
        right={
          <Button danger onPress={() => this.props.removeItemWithId(id)}>
            <Icon active name="trash" />
          </Button>
        }
      />
    );
  }
}

export default TaskItem;
