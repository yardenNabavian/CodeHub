import React, { Component } from "react";
import VideoCard from "./VideoCard"; //npm i youtube-node
import { Link } from "react-router-dom";
import { FormGroup, Form, Input, Button } from "reactstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkText: "",
      videos: [],
      loading: false,
    };
  }

  youtube_parser(url) {
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : false;
  }

  async componentDidMount() {}

  handleDelete = (event) => {
    //delete video
    console.log("deleted", event);
  };

  handleChange = (event) => {
    this.setState({ linkText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let linkID = this.youtube_parser(this.state.linkText);
    //add to db
    this.setState({
      linkText: "",
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
            <h1>Loading...</h1>
          ) : (
            this.state.videos.map((video, idx) => {
              return (
                <div key={idx}>
                  <Link to={`/video/${video}`}>
                    <VideoCard link={video} />
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
