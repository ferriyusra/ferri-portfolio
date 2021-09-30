import React from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
