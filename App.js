
import React from 'react';
import { StyleSheet, Text, View, ListView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';


export default class App extends React.Component {
  state = {
    items: [],
    item: ''
  }
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

  constructor() {
    super();
    AsyncStorage.getItem('items')
      .then(itemsJSON => {
        if(itemsJSON) {
          this.setState({
            items: JSON.parse(itemsJSON)
          })
        }
      })
  }

  onChangeText = text => {
    this.setState({
      item: text
    })
  }
  onNewItem = e => {
    const arr = [this.state.item, ...this.state.items];
    this.setState({
      items: arr,
      item: ''
    })
    this.save(arr);
  }

  save = (arr) => {
    AsyncStorage.setItem('items', JSON.stringify(arr))
  }

  renderRow = (rowData, sectionID, rowID) => {
    return (
      <View>
        <Text>{rowData}</Text>
        <TouchableOpacity
          onPress={()=> {
            this.state.items.splice(rowID, 1)
            this.setState({
              items: [...this.state.items]
            })
            this.save(this.state.items);
          }}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {

    return (
      <View>
        <View>
          <Text>TO DO LIST</Text>
        </View>
        <TextInput

          onSubmitEditing={this.onNewItem}
          placeholder='TODO: Title'
          returnKeyType="done"
          onChangeText={this.onChangeText}
          value={this.state.item}
        />

        <ListView
          dataSource={this.ds.cloneWithRows(this.state.items)}
          renderRow={this.renderRow}
          enableEmptySections
          />
      </View>
    );
  }
}
