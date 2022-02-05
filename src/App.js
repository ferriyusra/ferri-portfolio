import React from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./pages/Home"

import { Provider } from 'react-redux';

import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
