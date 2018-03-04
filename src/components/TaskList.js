import { View, SectionList, Text } from 'react-native';
import { Separator } from 'native-base';
import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  renderCell = ({ item }) => {
    return (
      <TaskItem
        item={item}
        checkItemWithId={this.props.checkItemWithId}
        editDescription={this.props.editDescription}
        moveToScreen={this.props.moveToScreen}
        removeItemWithId={this.props.removeItemWithId}
      />
    );
  };

  keyExtractor = (item, index) => item.id;

  render() {
    const sections = () => {
      if (this.props.toDoItems.length === 0 && this.props.doneItems.length === 0) {
        return [{ data: [], title: 'No Tasks, please add new one :)' }]
      } else if (this.props.toDoItems.length === 0) {
        return [{ data: this.props.doneItems, title: 'DONE!' }];
      } else if (this.props.doneItems.length === 0) {
        return [{ data: this.props.toDoItems, title: 'TO DO!' }];
      } else {
        return [
          { data: this.props.toDoItems, title: 'TO DO!' },
          { data: this.props.doneItems, title: 'DONE!' }
        ];
      }
    };
    return (
      <SectionList
        style={{ flex: 1 }}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderCell}
        renderSectionHeader={({ section }) => (
          <Separator>
            <Text>{section.title} </Text>
          </Separator>
        )}
        sections={sections()}
      />
    );
  }
}

export default TaskList;
