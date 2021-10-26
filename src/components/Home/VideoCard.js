import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default class YoutubeSample extends Component {
  constructor(props) {
    super(props);
    this.state = { videoData: {}, loading: true };
  }

  apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  async componentDidMount() {
    //fetch data from youtube api
    await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${this.props.link}&key=${this.apiKey}&part=snippet,statistics&fields=items(id,snippet,statistics)`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ videoData: data.items[0].snippet, loading: false })
      );
  }

  highestResThumbnail() {
    const pics = this.state.videoData.thumbnails;
    if (pics.maxres) {
      return pics.maxres.url;
    } else if (pics.high) {
      return pics.high.url;
    } else {
      return pics.default.url;
    }
  }

  render() {
    return this.state.loading ? (
      <></>
    ) : (
      <>
        <Card id="yt-card">
          <CardBody id="videoCard-body">
            <CardTitle tag="h5">{this.state.videoData.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Channel: {this.state.videoData.channelTitle}
            </CardSubtitle>
          </CardBody>
          <img
            src={this.highestResThumbnail()}
            alt={this.state.videoData.title}
          />
        </Card>
      </>
    );
  }
}
