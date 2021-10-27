import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './screens/searchScreen';
import Transaction from './screens/transactionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Transaction" component={Transaction}></Tabs.Screen>
        <Tabs.Screen name="Search" component={Search}></Tabs.Screen>

      </Tabs.Navigator>
    </NavigationContainer>
  );}
}

const Tabs = createBottomTabNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
