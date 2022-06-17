import React, { Component } from "react";
import { getTimeAgoString } from "../helpers/timeHelper";

export default class VideoCard extends Component {
  render() {
    const { video, videoDetailsIsOpen, onVideoSelect, isSelected } = this.props;
    const { title, channelTitle, thumbnails, publishedAt } = video.snippet;

    const cardBg = isSelected ? "text-bg-dark" : "";
    const imageSize = videoDetailsIsOpen ? "5" : "4";
    const finalTitle = videoDetailsIsOpen ? `${title.substr(0, 50)}...` : title;

    return (
      <div
        className={`video-card card mb-3 ${cardBg}`}
        onClick={() => onVideoSelect(video)}
      >
        <div className="row g-0">
          <div className={`col-md-${imageSize}`}>
            <img src={thumbnails.medium.url} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="video-title" title={title}>
                {finalTitle}
              </h5>
              <h6 className="video-author">{channelTitle}</h6>
              <p className="video-timeago">
                {getTimeAgoString(new Date(), new Date(publishedAt))}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
