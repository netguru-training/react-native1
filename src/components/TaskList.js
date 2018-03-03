import { View, FlatList, Text } from 'react-native';
import React, { Component } from 'react';
import TaskItem from './TaskItem'


class TaskList extends Component {
    renderCell = ({item}) => {
      return (
        <TaskItem item={item} checkItemWithId={this.props.checkItemWithId} editDescription={this.props.editDescription} />
      )
    }
componentDidMount() {
// this.props.checkItemWithId(0)
}
    render() {
      
        return (
           <FlatList style={{flex: 1, paddingTop: 20}} data={this.props.data} renderItem={this.renderCell} />
        );
    }
}

export default TaskList;
