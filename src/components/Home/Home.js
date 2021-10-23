import React, { Component } from "react";
import VideoCard from "./VideoCard"; //npm i youtube-node
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: ["dQw4w9WgXcQ", "2-cQ_Wtv0sQ", "N775KsWQVkw", "Z71E-PKSETQ"],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchVideoLinks();
  }

  fetchVideoLinks() {
    // links need to be fetched from my mongodb
  }

  render() {
    return (
      <div id="home-container">
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          this.state.videos.map((video, idx) => {
            return (
              <Link to={`/video/${video}`} key={idx}>
                <VideoCard link={video} />
              </Link>
            );
          })
        )}
      </div>
    );
  }
}
