import React, { Component } from "react";

export default class YoutubeSample extends Component {
  constructor(props) {
    super(props);
    this.state = { videoData: {}, loading: true };
  }

  apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  componentDidMount() {
    //fetch data from youtube api
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${this.props.link}&key=${this.apiKey}&part=snippet,statistics&fields=items(id,snippet,statistics)`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ videoData: data.items[0].snippet, loading: false })
      );
  }

  render() {
    return this.state.loading ? (
      <p>Loading...</p>
    ) : (
      <>
        <h4>{this.state.videoData.title}</h4>
        <img src={this.state.videoData.thumbnails.medium.url} alt="thumbnail" />
        <p>Channel: {this.state.videoData.channelTitle}</p>
      </>
    );
  }
}
