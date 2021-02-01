import React from "react";
import "./VideoItem.css";

//destructuring
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
};

// const VideoItem = (props) => {
//   return <div>Video Item</div>;
// };

export default VideoItem;
