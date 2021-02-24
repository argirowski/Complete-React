import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from './../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              onClick={() => this.props.selectSong(song)}
              className='ui button primary'
            >
              Select a song
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }
  s;
  render() {
    // console.log(this.props);
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

//the state in the mapStateToProps is the data of the entire store
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    songs: state.allSongs,
  };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
