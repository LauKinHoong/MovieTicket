/* eslint-disable prettier/prettier */
import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Paterson',
    poster: 'https://i.imgur.com/pE0C9E0.jpg',
    genre: 'Drama/Comedy',
    days,
    times,
  },
  {
    title: 'Jackie',
    poster: 'https://i.imgur.com/VqUi1sw.jpg',
    genre: 'Drama/Biography',
    days,
    times,
  },
  {
    title: 'Lo and Behold Reveries of the Connected World',
    poster: 'https://i.imgur.com/s106X7S.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: '10 Cloverfield Lane',
    poster: 'https://i.imgur.com/kV2BVdH.jpg',
    genre: 'Drama',
    days,
    times,
  },
  {
    title: 'Birth of a Nation',
    poster: 'https://i.imgur.com/a6HJj8S.jpg',
    genre: 'Fantasy/Myster',
    days,
    times,
  },
  {
    title: 'De Palma',
    poster: 'https://i.imgur.com/oOIa73M.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Doctor Strange',
    poster: 'https://i.imgur.com/kyHDVOk.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    times,
  },
  {
    title: 'Eddie the Eagle',
    poster: 'https://i.imgur.com/GNrdAuF.jpg',
    genre: 'Drama/Sport',
    days,
    times,
  },
  {
    title: 'Pride and prejudice and zombies',
    poster: 'https://i.imgur.com/KhbG0Lw.jpg',
    genre: 'Thriller/Action',
    days,
    times,
  },
  {
    title: 'Finding Dory',
    poster: 'https://i.imgur.com/BTexHYJ.jpg',
    genre: 'Comedy/Adventure',
    days,
    times,
  },
  {
    title: 'Green Room',
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    genre: 'Crime/Thriller',
    days,
    times,
  },
  {
    title: 'Kubo and the Two Strings',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    genre: 'Fantasy/Adventure',
    days,
    times,
  },
  {
    title: 'In a Valley of Violence',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    genre: 'Drama/Western',
    days,
    times,
  },
  {
    title: 'O.J.: Made in America',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Rogue One: A Star Wars Story',
    poster: 'https://i.imgur.com/zOF2iYc.jpg',
    genre: 'Science Fiction/Action',
    days,
    times,
  },
  {
    title: 'Sing Street',
    poster: 'https://i.imgur.com/C3ExEb6.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Zoolander 2',
    poster: 'https://i.imgur.com/ejlIijD.jpg',
    genre: 'Comedy',
    days,
    times,
  },
];

export const Top3Movies = [
  {
    id: 1,
    title: 'Frozen II',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg',
    genre: 'Animation/Fantasy',
  },
  {
    id: 2,
    title: 'Minions: The Rise of Gru',
    poster: 'https://dx35vtwkllhj9.cloudfront.net/universalstudios/minions-the-rise-of-gru/images/regions/ca/onesheet.jpg',
    genre: 'Animation/Comedy',
  },
  {
    id: 3,
    title: 'Crazy Rich Asians',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg',
    genre: 'Drama/Romance',
  },
];

export const images = [
  {
    title: 'Joker',
    poster: 'https://image.tmdb.org/t/p/original/mZuAPY4ETMQPHhCXIcJ90kd6RaS.jpg',
  },

  {
    title: 'BatMan',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  
  {
    title: 'Inception',
    poster: 'https://image.tmdb.org/t/p/original/8bxMHkuEzRpIC1YeVhWJKBnj5qq.jpg',
  },
  
];