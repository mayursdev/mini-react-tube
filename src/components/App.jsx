import React, { Component } from "react";
import Navbar from "./Navbar";
import VideosList from "./VideosList";
import VideoDetails from "./VideoDetails";

import youtube from "../api/youtube";

// //* Using sample_response.json for testing purposes */
// import sample_response from "../api/sample_response.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedVideos: [],
      selectedVideo: null,
    };
  }

  // method to run after user submits search form in navbar
  fetchSearchResults = async (searchQuery) => {
    const resp = await youtube.get("/search", {
      params: { q: searchQuery, type: "video" },
    });
    const fetchedVideos = resp.data.items;

    // const fetchedVideos = sample_response;
    this.setState({ fetchedVideos });
  };

  // method to run after user clicks on a video card
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const videoIsSelected = this.state.selectedVideo ? true : false;
    const videoListType = videoIsSelected ? "compact" : "expanded";
    const videoListSize = videoIsSelected ? 4 : 11;

    return (
      <>
        <Navbar fetchSearchResults={this.fetchSearchResults} />
        <div className="container mt-4">
          <div className="row">
            <div className={`col-md-${videoListSize} ${videoListType}`}>
              <VideosList
                fetchedVideos={this.state.fetchedVideos}
                onVideoSelect={this.onVideoSelect}
                videoDetailsIsOpen={videoIsSelected}
                selectedVideo={this.state.selectedVideo}
              />
            </div>
            {videoIsSelected ? (
              <div className="col-md-8">
                <VideoDetails selectedVideo={this.state.selectedVideo} />
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default App;
