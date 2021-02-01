import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  //videos in an empty array
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (t) => {
    const response = await youtube.get("/search", {
      params: {
        //t is the argument passed in the onTermSubmit function
        q: t,
      },
    });
    this.setState({ videos: response.data.items });
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
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
