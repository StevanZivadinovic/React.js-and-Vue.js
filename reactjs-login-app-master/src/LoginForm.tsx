import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useHistory, useParams, RouteComponentProps  } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { History } from 'history';

import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

import "./api/index";
import Axios from "axios";
interface propsMoje {
  history ?: RouteComponentProps["history"];
  moje ?: string,
  redirectPropApp:React.ReactNode//ovo je prop koji je povezan sa App.tsx
}

function LoginForm (props:propsMoje){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [moje, setMoje] = useState<propsMoje['moje']>('111');
  const [redirectPropApp, setRedirectProp] = useState<propsMoje['redirectPropApp']>();
  
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(redirectPropApp, moje, props)
    e.preventDefault();
    console.log(username, password);
    let patternPassword = new RegExp("^[a-z0-9_-]{3,16}$");
    let patternUsername = new RegExp("^[a-z0-9_-]{3,16}$");
    console.log(patternPassword.test(username), patternUsername.test(username));
    if (patternPassword.test(password) && patternUsername.test(username)) {
      const params = JSON.stringify({
        username: username,

        password: password,
      });
      const url = "http://localhost:3001/login";
      const url1 = "https://jsonplaceholder.typicode.com/todos";

      Axios.post("", params)
        .then((response) => {
          console.log(response);
          if (response) {
            alert("Success!");
            setRedirectProp('true')
            console.log(redirectPropApp)
            // setRedirect(true)
            // useHistory().push('/')
            
              // return (
              //   <Route exact path="/login">
              //   {true ? <Redirect to="/dashboard" /> :''}
              // </Route>
              // )
            
          } else {
            alert("Failed!");
            // setRedirect(false)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("password or username is incorect");
    }
  };

  const style = {
    width: "20%",
    margin: "0 auto",
    height: "100vh",
  };
  return (
    <Form
      className="form align-middle d-flex flex-column justify-content-center"
      onSubmit={submit}
      style={style}
    >
      <FormGroup>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // pattern={}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>

      <Button type="submit">Sign in</Button>
    </Form>
  );
};

export default LoginForm;

// fetch("http://localhost:3001/login", {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   method: "POST",
//   body: JSON.stringify({
//     username: username,
//     password: password,
//   }),
// }).then((response) => {
//   if (response.ok) {
//     alert("Success!");
//   } else {
//     alert("Failed!");
//   }
// });
