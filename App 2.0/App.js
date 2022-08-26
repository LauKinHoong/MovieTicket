import HomeScreen from './Screens/HomeScreen';
import ChickenScreen from './Screens/ChickenScreen';
import AnimalScreen from './Screens/AnimalScreen';
import CowScreen from './Screens/CowScreen';
import PigScreen from './Screens/PigScreen';
import ProfileScreen from './Screens/ProfileScreen';
import TrolleyScreen from './Screens/TrolleyScreen';
import ConfirmScreen from './Screens/ConfirmScreen';
import ChildStackNavigator from './Screens/ChildStackNavigator';
import { Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const StackNav = createStackNavigator();
const Tab = createBottomTabNavigator();
let SQLite = require('react-native-sqlite-storage');

export default class App extends Component {
  constructor(props){
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
  _insert() {
    this.db.transaction(tx => {
        tx.executeSql('INSERT INTO trolley(userId, movieId, name, date, time, ticket, price) VALUES(1, 2, "Frozen", "03 August 2019", "9:34pm", 3, 16)');
    });
}
  render() {
    return (

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarActiveBackgroundColor: 'pink',
            tabBarLabelStyle: {
              fontSize: 22,
            },
            tabBarStyle: {
              backgroundColor: 'lightgrey',
              borderRadius: 50
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="home" size={20} color={'red'} />;
              },
            }}
          />
          <Tab.Screen
            name="Trolley"
            component={ChildStackNavigator}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="basket" size={20} color={'blue'} />;
              },
              unmountOnBlur: true
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="person" size={20} color={'blue'} />;
              },
              unmountOnBlur: true
            }}

          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}