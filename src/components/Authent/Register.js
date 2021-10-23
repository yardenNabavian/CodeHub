import React from "react";
import {
  Card,
  CardBody,
  Form,
  Label,
  Input,
  CardTitle,
  FormGroup,
  Button,
  ButtonGroup,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import { auth, googleSignIn, provider, register } from "../../firebase";

export default class Register extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    error: false,
    error2: false,
  };

  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: true });
    } else {
      register(auth, this.state.email, this.state.password).catch((error) => {
        this.setState({ error2: true });
      });
    }
  };

  handleGoogleAuth = (event) => {
    googleSignIn(auth, provider).catch((error) => {
      this.setState({ error2: true });
    });
  };

  render() {
    return (
      <>
        <Card body>
          <CardTitle tag="h5">Register</CardTitle>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="RegisterEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="RegisterEmail"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event, "email")}
                  placeholder="Email Adress"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Password"
                  minLength="6"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="ConfirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  minLength="4"
                  value={this.state.confirmPassword}
                  onChange={(event) =>
                    this.handleChange(event, "confirmPassword")
                  }
                />
              </FormGroup>
              <ButtonGroup id="login-btn-group">
                <Button type="submit" color="secondary" outline>
                  Register
                </Button>
                <Button color="info" outline>
                  <Link to="/login">Back to Login</Link>
                </Button>
                <Button color="primary" outline onClick={this.handleGoogleAuth}>
                  Sign In With Google
                </Button>
              </ButtonGroup>
            </Form>
            {this.state.error ? (
              <Alert color="danger">Passwords Don't Match</Alert>
            ) : null}
            {this.state.error2 ? (
              <Alert color="danger">Somthing wen't wrong, Try Again!</Alert>
            ) : null}
          </CardBody>
        </Card>
      </>
    );
  }
}
