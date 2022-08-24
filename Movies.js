/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';

// export default class Movies extends Component {
//   render() {
//     return (
//       <View>
//         <ScrollView>
//           {movies.map((movie, index) => <Text>{movie.title}</Text>)}
//         </ScrollView>
//       </View>
//     );
//   }
// }

export default class Movies extends Component {
    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
          contentContainerStyle={styles.scrollContent}
          {movies.map((movie, index) => <MoviePoster
           movie={movie}
           onOpen={this.openMovie}
           key={index}
           />)}
          </ScrollView>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});
