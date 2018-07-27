import React, { Component } from "react";
import TabOne from "./TabOne";
import AccelerometerSensor from "./AccelerometerSensor";

export default TabNavigator({
  TabOne: { screen: TabOne },
  AccelerometerSensor: { screen: AccelerometerSensor }
});
