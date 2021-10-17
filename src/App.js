import React from "react";
import { Layout } from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Video from "./components/Video/Video";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/video/:video" exact component={Video} />
          <Route path="/" render={() => <div>404 Page Not Found</div>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
