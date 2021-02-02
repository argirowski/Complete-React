// import { render } from "@testing-library/react";
import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = (props) => {
//   //props.videos
//   return <div>{props.videos.length}</div>;
// };
//es2015 destructuring / shortening the code
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    //video is passed as a prop
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });
  //props.videos
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
