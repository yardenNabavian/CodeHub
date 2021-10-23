import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, Button, NavItem } from "reactstrap";
import "./NavBar.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default class NavBar extends Component {
  state = {
    isSignedIn: false,
  };
  auth = getAuth();
  componentDidMount() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.setState({ isSignedIn: true });
      }
    });
  }

  handleSignOut = (event) => {
    this.auth.signOut().then(this.setState({ isSignedIn: false }));
  };

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand href="/">CodeHub</NavbarBrand>
            {this.state.isSignedIn ? (
              <>
                <Button outline color="danger" onClick={this.handleSignOut}>
                  Sign Out {this.auth.currentUser.displayName}
                </Button>
              </>
            ) : null}
          </Container>
        </Navbar>
      </header>
    );
  }
}
