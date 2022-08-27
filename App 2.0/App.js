/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { Text, StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener']);

import HomePage from './HomePage';
import Movies from './Movies';
//copy from this (1)
import ProfileScreen from './Screens/ProfileScreen';
import ChildStackNavigator from './Screens/ChildStackNavigator';
// to this (1)

const Tab = createBottomTabNavigator();
let SQLite = require('react-native-sqlite-storage'); //Copy this (2)
const RouteMapper = (route, navigator) => {
  if (route.name == 'Movies') {
    return <Movies navigator={navigator} />;
  }
};

export default class App extends Component {
  //Copy from this (3)
  constructor(props) {
    super(props)
    this.db = SQLite.openDatabase(
      { name: 'movieHistory', createFromLocation: '~db.sqlite' },
      this.openCallback,
      this.errorCallback,
    );
  }
  componentDidMount() {
    //insert data into the database to test run it.
    //this._insert();
    this._databasePrepare();
  }
  _databasePrepare() {
    this.db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS trolley(id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, movieId INTEGER, name VARCHAR(30), date VARCHAR(20), time VARCHAR(20), ticket INTEGER, price INTEGER)',
        [],
        (sqlTxn, res) => {
          console.log('trolley table ready');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS movieHistory(id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, movieId INTEGER, name VARCHAR(30), date VARCHAR(20), time VARCHAR(20), ticket INTEGER, price INTEGER)',
        [],
        (sqlTxn, res) => {
          console.log('movieHistory table ready');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  }
  //to this (3)
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
              borderRadius: 30
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
          
          <Tab.Screen //Copy this tab
            name="Trolley"
            component={ChildStackNavigator}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="basket" size={20} color={'blue'} />;
              },
              unmountOnBlur: true //this is important
            }}
          />

          <Tab.Screen //Copy this tab
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="person" size={20} color={'green'} />;
              },
              unmountOnBlur: true //this is important
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>


    );
  }
}
