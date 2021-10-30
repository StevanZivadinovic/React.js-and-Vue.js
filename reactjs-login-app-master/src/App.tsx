import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './App.css';

import {
  BrowserRouter as Router, Switch, Route, Link, Redirect
} from "react-router-dom";
interface AppProps {
  redirectPropApp ?: React.ReactNode,

}
//React.ReactNode, ovo kucas kad hoces da prop prihvata bilo koji tip podataka
function App(props: AppProps) {
  // const [redirectPropApp, setRedirectProp] =  useState<AppProps['redirectPropApp']>('ovo je doslo iz app');
  const  redirectPropApp=function(arg:boolean) {
    console.log(arg)
  }
  console.log(redirectPropApp)
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route path="/login">
      <LoginForm redirectPropApp={redirectPropApp}/>
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

                {/* <Route exact path="/login">
                {true ? <Redirect to="/dashboard" /> :''}
              </Route> */}
      </Router>
    </div>
  );
}

export default App;
