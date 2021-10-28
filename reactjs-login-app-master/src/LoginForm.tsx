import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useHistory } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import './api/index';
import Axios from "axios";



const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  



  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password)
    let patternPassword = new RegExp("^[a-z0-9_-]{3,16}$");
    let patternUsername = new RegExp("^[a-z0-9_-]{3,16}$");
    console.log(patternPassword.test(username), patternUsername.test(username))
    if(patternPassword.test(password) && patternUsername.test(username)){

      const params = JSON.stringify({

        "username": username,
        
        "password": password,
        
        });
        const url = 'http://localhost:3001/login'
        const url1 = 'https://jsonplaceholder.typicode.com/todos'
  
        
       
      Axios.post('',params).then((response) => {
        console.log(response)
          if (response) {
              alert("Success!");

             <Redirect to='/'  />
          } else {
              alert("Failed!");
          }
      }).catch(err=>{
        console.log(err)
      })
      
    }
    else{
      console.log('password or username is incorect')
    }
    

   

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

  
  };

  const style={
    width:'20%',
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
          // pattern={}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          
        />
      </FormGroup>

      <Button type="submit">Sign in</Button>
    </Form>
    
  );
};

export default LoginForm;
