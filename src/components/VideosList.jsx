import React, { Component } from "react";
import VideoCard from "./VideoCard";

class VideosList extends Component {
  render() {
    const { fetchedVideos, onVideoSelect, selectedVideo } = this.props;

    // generate list
    const fetchedVideosCards = fetchedVideos.map((video) => {
      const isSelected = video.id.videoId === selectedVideo?.id?.videoId;
      return (
        <VideoCard
          key={video.id.videoId}
          video={video}
          layoutConfig={this.props.layoutConfig}
          onVideoSelect={onVideoSelect}
          isSelected={isSelected}
        />
      );
    });

    return <div className="videos-list">{fetchedVideosCards}</div>;
  }
}

export default VideosList;
