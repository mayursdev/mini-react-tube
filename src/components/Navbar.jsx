import React, { Component } from "react";

class Navbar extends Component {
  state = {
    searchQuery: "",
  };

  onInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSearchResults(this.state.searchQuery);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top">
        <div className="container justify-content-start">
          <a className="navbar-brand fw-bold" href="/">
            MiniTube
          </a>

          <div className="searchBar w-100">
            <form className="d-flex" onSubmit={this.onFormSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onInputChange}
                value={this.state.searchQuery}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
