import React from "react";
import "./App.scss";
import Homepage from "./components/Homepage";
import BeersList from "./components/BeersList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/beerslist" component={BeersList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
