import React, { Component } from "react";
import VideoCard from "./VideoCard";

class VideosList extends Component {
  render() {
    const fetchedVideosCards = this.props.fetchedVideos.map((video) => {
      return <VideoCard key={video.id.videoId} video={video} />;
    });

    return <div className="videos-list mt-4">{fetchedVideosCards}</div>;
  }
}

export default VideosList;
