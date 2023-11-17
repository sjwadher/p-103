import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";


import AddTaskScreen from '../screens/addTask';
import ShowTaskScreen from '../screens/showTask';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
	render() {
 return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === "AddTask") {
            iconName = focused ? "create" : "create-outline";
          } else if (route.name === "ShowTask") {
            iconName = focused ? "laptop" : "laptop-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
     					<Tab.Screen name='AddTask' component={AddTaskScreen} />
					<Tab.Screen name='ShowTask' component={ShowTaskScreen} />
    </Tab.Navigator>
  );
	}
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

