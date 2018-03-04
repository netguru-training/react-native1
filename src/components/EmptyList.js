import React, { Component } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';

class EmptyScreen extends Component {
  
  constructor() {
    super()
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(-0.05)
    Animated.timing(
      this.spinValue,
      {
        toValue: 0.05,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.spinBack())
  }
   spinBack() {
    this.spinValue.setValue(0.05)
    Animated.timing(
      this.spinValue,
      {
        toValue: -0.05,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
   }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={{flex: 1, alignItems:'center', marginTop: 70}}>
        <Animated.Image source={require('./crying-baby.png')} style={{height:200, width: 200, transform:[{rotate: spin}]}} />
        <Text style={{fontSize: 20, paddingTop: 20}}>Your list is Empty 😢</Text>
        </View>
      
    );
  }
}

export default EmptyScreen;
