import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Card,
  CardTitle,
  CardBody,
  Label,
  Input,
  Button,
  ButtonGroup,
  Alert,
} from "reactstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: false,
  };

  auth = getAuth();
  provider = new GoogleAuthProvider();

  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(
      this.auth,
      this.state.email,
      this.state.password
    ).catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
      this.setState({ error: true });
    });
  };
  handleGoogleAuth = (event) => {
    signInWithPopup(this.auth, this.provider);
  };

  render() {
    return (
      <>
        <Card body>
          <CardTitle tag="h5">Login</CardTitle>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="LoginEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="LoginEmail"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event, "email")}
                  placeholder="Email Adress"
                />
              </FormGroup>
              <FormGroup>
                <Label for="LoginPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="LoginPassword"
                  placeholder="Password"
                  minLength="4"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
              </FormGroup>
              <ButtonGroup id="login-btn-group">
                <Button type="submit" color="secondary" outline>
                  Sign In
                </Button>
                <Button color="info" outline>
                  <Link to="/register">Register</Link>
                </Button>
                <Button color="primary" outline onClick={this.handleGoogleAuth}>
                  Sign In With Google
                </Button>
              </ButtonGroup>
            </Form>
            {this.state.error ? (
              <Alert color="danger">Email or Password Incorrect</Alert>
            ) : null}
          </CardBody>
        </Card>
      </>
    );
  }
}
