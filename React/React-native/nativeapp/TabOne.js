import React from "react";
import { StyleSheet, View, Button, Alert, Text } from "react-native";

export default class TabOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Bienvenue"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Vas sur l'onglet "accelerometersensor" :)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
