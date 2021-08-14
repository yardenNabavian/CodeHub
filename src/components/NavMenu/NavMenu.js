import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./NavMenu.css";

export default class NavMenu extends Component {
  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <Router>
              <NavbarBrand tag={Link} to="/">
                CodeHub
              </NavbarBrand>
            </Router>
          </Container>
        </Navbar>
      </header>
    );
  }
}
