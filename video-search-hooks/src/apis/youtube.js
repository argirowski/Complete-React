import axios from "axios";

const KEY = "AIzaSyCkid-6rkZjQMBReOxM-f5XMv2FLyAHvq4";

export default axios.create({
  //no slash / at the end because we'll add our custom
  baseURL: "https://www.googleapis.com/youtube/v3",
  //options object
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
