import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Success!");
      } else {
        alert("Failed!");
      }
    });
  };

  const style={
    width:'200px',
    margin:'0 auto',
    height:'100vh'
  }
  return (
    
    <Form className="form align-middle d-flex flex-column justify-content-center" onSubmit={submit} style={style}>
      <FormGroup>
        <Input
        
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
