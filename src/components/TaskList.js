import { View, FlatList, Text } from 'react-native';
import React, { Component } from 'react';
import data from "./dummyData";
import TaskItem from './TaskItem'


class TaskList extends Component {
    renderCell = ({item}) => {
      return (
        <TaskItem item={item} />
      )
    }

    render() {
      console.log(data)
        return (
           <FlatList style={{flex: 1, paddingTop: 20}} data={data} renderItem={this.renderCell} />
        );
    }
}

export default TaskList;
