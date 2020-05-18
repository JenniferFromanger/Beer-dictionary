import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Abvs from "./components/Abvs";
import Beer from "./components/Beer";
import BeersList from "./components/BeersList";
import Homepage from "./components/Homepage";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/beerslist" component={BeersList} />
          <Route path={`/beerslist/beer`} component={Beer} />
          <Route path={`/beerslist/abvs`} component={Abvs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
