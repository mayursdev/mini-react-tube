import React, { Component } from "react";

export default class VideoCard extends Component {
  render() {
    const { title, channelTitle, thumbnails } = this.props.video.snippet;

    return (
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-3">
            <img src={thumbnails.medium.url} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="video-title" title={title}>
                {title}
              </h5>
              <h6 className="video-author">{channelTitle}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
