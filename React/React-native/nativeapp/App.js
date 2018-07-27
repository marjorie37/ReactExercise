import React from "react";
import { Component } from "react";
import { StyleSheet, View, Button, Alert, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import AccelerometerSensor from "./AccelerometerSensor";

// export default createBottomTabNavigator({
//   TabOne: { screen: TabOne },
//   AccelerometerSensor: { screen: AccelerometerSensor }
// });

class App extends React.Component {
  handleClick() {
    Alert.alert("Hello !");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Click on the button : </Text>
        <Button onPress={this.handleClick.bind(this)} title="Go" />
      </View>
    );
  }
}

class TabOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Vas sur l'onglet "accelerometersensor" </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20%"
  }
});

export default createBottomTabNavigator({
  App: App,
  Tab_one: TabOne,
  Sensor: AccelerometerSensor
});
