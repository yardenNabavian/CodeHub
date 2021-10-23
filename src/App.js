import React, { Component } from "react";
import { Layout } from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Video from "./components/Video/Video";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Authent/Login";
import Register from "./components/Authent/Register";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class App extends Component {
  state = {
    loading: true,
  };
  auth = getAuth();
  componentDidMount() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.setState({ loading: false, isAuthed: true });
      } else {
        this.setState({ loading: false, isAuthed: false });
      }
    });
  }
  render() {
    return (
      <Router>
        <Layout>
          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <Switch>
              {this.state.isAuthed ? (
                <>
                  <Redirect to="/" />
                  <Route path="/" exact component={Home} />
                  <Route path="/video/:video" exact component={Video} />
                </>
              ) : (
                <>
                  <Redirect to="/login" />
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                </>
              )}
              <Route path="/" render={() => <div>404 Page Not Found</div>} />
            </Switch>
          )}
        </Layout>
      </Router>
    );
  }
}

export default App;
