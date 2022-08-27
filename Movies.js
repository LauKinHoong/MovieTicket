import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';

let SQLite = require('react-native-sqlite-storage');
export default class Movies extends Component {
  // Add starting here
  state = {
    popupIsOpen: false,
    // Day chosen by user
    chosenDay: 0,       // choose first day by default
    // Time chosen by user
    chosenTime: null,
  }

  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,
    });
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
      // Reset values to default ones
      chosenDay: 0,
      chosenTime: null,
    });
  }

  chooseDay = (day) => {
    this.setState({
      chosenDay: day,
    });
  }

  chooseTime = (time) => {
    this.setState({
      chosenTime: time,
    });
  }

  bookTicket = () => {
    // Make sure they selected time 
    if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {
      // Close popup
      this.closeMovie();
      // Navigate away to Confirmation route
      alert('Booking Successfully !\n\nHere is your booking no : ' + Math.random().toString(36).substring(6).toUpperCase());
      this._insert();
      //this.props.onPress.navigate({
      //name: 'Confirmation',
      // Generate random string
      //code: Math.random().toString(36).substring(6).//toUpperCase(),
      //});
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: 'johndoe@gmail.com', //change this code to get the profile's id
      },
      movie: [],
    }
    this.db = SQLite.openDatabase(
      { name: 'movieHistory', createFromLocation: '~db.sqlite' },
      this.openCallback,
      this.errorCallback,
    );
  }
  openCallback() {
    console.log('database open success');
  }
  errorCallback(err) {
    console.log('Error in opening the database: ' + err);
  }
  _insert() {
    this.db.transaction(tx => {
      tx.executeSql('INSERT INTO trolley(email, movieId, name, date, time, ticket, price) VALUES(?,?,?,?,?,?,?)',
        [this.state.user.email, 1, this.state.movie.title, { chosenDay }, { chosenTime }, 1, 16])
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) => <MoviePoster
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>
        <MoviePopup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
          onBook={this.bookTicket}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
    backgroundColor: 'black',
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});
