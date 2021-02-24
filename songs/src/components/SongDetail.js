import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Please Select a Song.</div>;
  }
  //   console.log(props);
  return (
    <div>
      <h3>Details for: </h3>
      <p>Song title: {mySelectedSong.title}</p>
      <p>Song artist: {mySelectedSong.artist}</p>
    </div>
  );
};

//the state in the mapStateToProps is the data of the entire store
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    mySelectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
