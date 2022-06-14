import React, { Component } from "react";
import Navbar from "./Navbar";
import VideosList from "./VideosList";
import VideoDetails from "./VideoDetails";

import youtube from "../api/youtube";
import sample_response from "../api/sample_response.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedVideos: [],
    };
  }

  fetchSearchResults = async (searchQuery) => {
    const resp = await youtube.get("/search", {
      params: { q: searchQuery, type: "video" },
    });
    const fetchedVideos = resp.data.items;
    this.setState({ fetchedVideos });
  };

  render() {
    return (
      <>
        <Navbar fetchSearchResults={this.fetchSearchResults} />
        <div className="container">
          <VideosList fetchedVideos={this.state.fetchedVideos} />
        </div>
      </>
    );
  }
}

export default App;
