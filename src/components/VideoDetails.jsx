import React, { Component } from "react";
import { getTimeAgoString } from "../helpers/timeHelper";
import Spinner from "./Spinner";

export default class VideoDetails extends Component {
  getFormatedDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  render() {
    if (!this.props.selectedVideo) return <Spinner />;

    const {
      snippet: { title, description, channelTitle, publishedAt },
      id: { videoId },
    } = this.props.selectedVideo;
    const embedVideoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-details sticky-top">
        <iframe
          width="100%"
          height="315"
          src={embedVideoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
        <div className="card text-bg-light mb-3">
          <div className="card-header p-3">
            <h5>{title}</h5>
            <h6 className="mb-0">{channelTitle}</h6>
          </div>
          <div className="card-body">
            <h6 className="upload-time">
              {this.getFormatedDate(publishedAt)} •{" "}
              <span className="time-ago">
                {getTimeAgoString(new Date(), new Date(publishedAt))}
              </span>
            </h6>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
