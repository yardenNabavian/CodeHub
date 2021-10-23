import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, Button } from "reactstrap";
import "./NavBar.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default class NavBar extends Component {
  state = {
    isSignedIn: false,
  };
  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ isSignedIn: true });
      }
    });
  }

  handleSignOut = (event) => {
    auth.signOut().then(this.setState({ isSignedIn: false }));
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
                  Sign Out {auth.currentUser.displayName}
                </Button>
              </>
            ) : null}
          </Container>
        </Navbar>
      </header>
    );
  }
}
