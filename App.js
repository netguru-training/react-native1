import React from "react";
import MainNavigator from "./src/MainNavigator";
export default class App extends React.Component {

  state = {
    isReady: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({isReady:true})
  }

  render() {
    if (this.state.isReady){
      return <MainNavigator />;
    } else {
      return null
    }
  }
}
