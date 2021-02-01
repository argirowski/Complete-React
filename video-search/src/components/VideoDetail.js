import React from "react";
const VideoDetail = ({ video }) => {
  //this checkup is done because the initial value of selectedVideo is null and cannot reference property of null (video.snippet.title)
  if (!video) {
    return <div>Loading ...</div>;
  }
  return <div>{video.snippet.title}</div>;
};
export default VideoDetail;
