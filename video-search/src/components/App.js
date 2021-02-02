import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  //videos in an empty array
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    //building is the default search term
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (t) => {
    const response = await youtube.get("/search", {
      params: {
        //t is the argument passed in the onTermSubmit function
        q: t,
      },
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    // console.log(t);
    // console.log(response);
  };

  //the video object is the one fetched from the youtube API
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    // console.log("From the app", video);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* passing a prop for the array when we call onTermSubmit */}
      <div className='ui grid'>
      <div className='ui row'>
      <div className='eleven wide column'>
      <VideoDetail video={this.state.selectedVideo} />
      </div>
           <div className='five wide column'>
           <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
           </div>
      </div>
      </div>
      </div>
    );
  }
}
export default App;
