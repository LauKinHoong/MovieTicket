/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LogBox} from 'react-native';
LogBox.ignoreLogs (['EventEmitter.removeListener']);

import HomePage from './HomePage';
import Movies from './Movies';
import ContactUsPage from './ContactUsPage';


const Tab = createBottomTabNavigator ();

const RouteMapper = (route, navigator) => {
  if (route.name == 'Movies') {
    return <Movies navigator={navigator} />;
  }
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
         <Tab.Navigator
          initialRouteName={'Main'}
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarActiveBackgroundColor: 'pink',
            // inactiveBackgroundColor: 'white',
            tabBarLabelStyle: {
              fontSize: 22,
            },
            tabBarStyle: {
             backgroundColor: 'lightgrey',
              borderRadius:30
          },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="home" size={20} color={'red'} />;
              },
            }}
          />

          <Tab.Screen
            name="Movies"
            component={Movies}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="film" size={20} color={'blue'} />;
              },
            }}
          />

          <Tab.Screen
            name="Profile"
            component={ContactUsPage}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="person" size={20} color={'green'} />;
              },
            }}
          />

        </Tab.Navigator>
        
      </NavigationContainer>

     
    );
  }
}
