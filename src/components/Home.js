import React, { Component } from "react";
import VideoCard from "./VideoCard"; //npm i youtube-node

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: ["dQw4w9WgXcQ", "2-cQ_Wtv0sQ"],
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
      <>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          this.state.videos.map((video, idx) => {
            return <VideoCard link={video} key={idx} />;
          })
        )}
      </>
    );
  }
}
