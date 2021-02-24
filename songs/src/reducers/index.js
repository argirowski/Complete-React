import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Purple Haze', artist: 'Jimi Hendrix' },
    { title: 'Under Pressure', artist: 'Queen & David Bowie' },
    { title: 'Start Me Up', artist: 'Queen & David Bowie' },
    { title: 'Proud Mary', artist: 'Creedence Clearwater Revival' },
    { title: 'Rockin’ in the Free World', artist: 'Neil Young' },
    { title: 'Whole Lotta Love', artist: 'Led Zeppelin' },
    { title: 'Should I Stay or Should I Go', artist: 'The Clash' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  allSongs: songsReducer,
  selectedSong: selectedSongReducer,
});
