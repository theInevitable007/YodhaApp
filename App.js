import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import SignUpScreen from './screens/SignUpScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddComplaint from './screens/AddComplaint';
import ComplaintsList from './screens/ComplaintsList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';

const switchNav = createSwitchNavigator({
  LoginScreen: {screen: WelcomeScreen},
  SignUpScreen: {screen: SignUpScreen},
  tabs: {screen: tabNavigator},
});
const tabNavigator = createBottomTabNavigator({
  Home: {screen: ComplaintsList},
  AddComplaint: {screen: AddComplaint},
  Setting:  {screen: SettingsScreen}
});
const AppContainer = createAppContainer(switchNav);

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});