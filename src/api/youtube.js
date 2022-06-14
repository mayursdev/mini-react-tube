import  axios  from "axios";

const KEY = "AIzaSyBXJXA8mj1cp6AFtvq6vtCIr_HPpRNLSO4";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 10
  }
})