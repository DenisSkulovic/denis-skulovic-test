import "./App.css";
import React from "react";

// pages
import Home from "./pages/home/Home";
import Page404 from "./pages/page404/Page404";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
