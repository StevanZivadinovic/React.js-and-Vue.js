import React from 'react';
import LoginForm from './LoginForm';
import './App.css';

import {
  BrowserRouter as Router, Switch, Route, Link, Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route path="/login">
      <LoginForm/>
      </Route>
      <Route path='/'/>
        </Switch>

        <Route
                exact
                path="/"
                render={() => {
                    return (
                      // this.state.isUserAuthenticated ?
                      <Redirect to="/login" /> 
                      // <Redirect to="/test1" /> 
                    )
                }}
              />
      </Router>
    </div>
  );
}

export default App;
