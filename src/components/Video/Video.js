import React, { Component } from "react";

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { video: this.props.match.params.video, VideoData: {} };
  }

  apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${this.state.video}&key=${this.apiKey}&part=snippet,statistics&fields=items(id,snippet,statistics)`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ VideoData: data.items[0].snippet });
      });
  }

  render() {
    console.log(this.props.match);
    console.log(this.state.VideoData);
    return (
      <>
        <h2>{this.state.VideoData.title}</h2>
        <p>{this.state.VideoData.channelTitle}</p>

        <div className="video-responsive" id="video-container">
          <iframe
            width="1280"
            height="720"
            src={`https://www.youtube.com/embed/${this.state.video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </>
    );
  }
}
