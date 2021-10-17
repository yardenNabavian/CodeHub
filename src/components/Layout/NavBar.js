import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <Link to="/">
              <NavbarBrand>CodeHub</NavbarBrand>
            </Link>
          </Container>
        </Navbar>
      </header>
    );
  }
}
