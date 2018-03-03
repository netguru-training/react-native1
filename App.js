import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import TaskList from "./src/components/TaskList";
import TaskFull from "./src/components/TaskFull";

export default class App extends React.Component {
  state = {
    items: [],
    itemName: ""
  };
  // ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  constructor() {
    super();
    AsyncStorage.getItem("items").then(itemsJSON => {
      if (itemsJSON) {
        this.setState({
          items: JSON.parse(itemsJSON)
        });
      }
    });
  }

  onChangeText = text => {
    this.setState({
      itemName: text
    });
  };
  onNewItem = e => {
    let id = Math.random();
    const item = {
      id: id,
      name: this.state.itemName,
      description: "",
      isCompleted: false
    };
    const arr = [item, ...this.state.items];
    this.setState({
      items: arr
    });
    this.save(arr);
  };

  save = arr => {
    AsyncStorage.setItem("items", JSON.stringify(arr));
  };

  // renderRow = (rowData, sectionID, rowID) => {
  //   return (
  //     <View>
  //       <Text>{rowData}</Text>
  //       <TouchableOpacity
  //         onPress={()=> {
  //           this.state.items.splice(rowID, 1)
  //           this.setState({
  //             items: [...this.state.items]
  //           })
  //           this.save(this.state.items);
  //         }}>
  //         <Text>Delete</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  render() {
    console.log(this.state.items);
    return (
      <View>
        <View>
          <Text>TO DO LIST</Text>
        </View>
        <TextInput
          onSubmitEditing={this.onNewItem}
          placeholder="TODO: Title"
          returnKeyType="done"
          onChangeText={this.onChangeText}
          value={this.state.item}
        />
        <TaskList data={this.state.items} />
      </View>
    );
  }
}
