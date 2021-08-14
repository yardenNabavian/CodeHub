import React, { Component } from "react";
import { Container } from "reactstrap";
import NavBar from "./NavBar/NavBar";

export class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
