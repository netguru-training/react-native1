import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { Component } from "react";
import data from "./dummyData";

const { height, width } = Dimensions.get("window");
class TaskFull extends Component {
  // state = {  }
  render() {
    return (
      <View 
     
      style={styles.taskFullContainer}>
        <Text style={styles.taskFullName}>{data[0].name}</Text>
        <View style={styles.taskFullDescriptionContainer}>
          <Text style={styles.taskFullDescription}>{data[0].desc}</Text>
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
    borderColor: 'rgba(0,0,0,0.3)'
},
taskFullName: {
    fontSize: 30,
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  taskFullDescriptionContainer: {
    width: "100%",
    flex: 6,
    backgroundColor: 'lightgray'
  },
  taskFullDescription: {
    fontSize: 24
  }
});

export default TaskFull;
