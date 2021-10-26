import React, { Component } from "react";
import VideoCard from "./VideoCard"; //npm i youtube-node
import { Link } from "react-router-dom";
import { FormGroup, Form, Input, Button } from "reactstrap";
import { getVideos, auth, addVideo, deleteVideo } from "../../firebase";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkText: "",
      videos: [],
      loading: true,
    };
  }

  youtube_parser(url) {
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : false;
  }

  componentDidMount() {
    getVideos(auth.currentUser.uid).then((vids) => {
      this.setState({ videos: vids, loading: false });
      console.log(this.state);
    });
  }

  handleDelete = async (event) => {
    await this.setState({ loading: true });
    deleteVideo(auth.currentUser.uid, event.link);
    const videos = await this.state.videos.filter((v) => v.link !== event.link);
    this.setState({ videos, loading: false });
  };

  handleChange = (event) => {
    this.setState({ linkText: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let linkID = await this.youtube_parser(this.state.linkText);
    addVideo(auth.currentUser.uid, linkID);
    const videos = [...this.state.videos];
    await videos.push({ link: linkID });
    this.setState({
      linkText: "",
      videos,
    });
  };

  render() {
    return (
      <>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="ytLink"
              id="addVid"
              placeholder="Copy and Paste a Youtube link to Add to your Hub"
              value={this.state.linkText}
              onChange={this.handleChange}
            />
          </FormGroup>
          <p className="text-muted p-1">press "enter" to add</p>
        </Form>
        <div id="home-container">
          {this.state.loading ? (
            <></>
          ) : (
            this.state.videos.map((video) => {
              return (
                <div key={video}>
                  <Link to={`/video/${video.link}`}>
                    <VideoCard link={video.link} />
                  </Link>
                  <Button onClick={() => this.handleDelete(video)}>
                    Delete
                  </Button>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
}
