import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ValidationSignUp from "../signupValidation";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(ValidationSignUp(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup_zahtev", values)
        .then((res) => {
          navigate("/");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setErrors((prev) => ({ ...prev, email: err?.response?.data?.error }));
        });
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={(event) => {
                handleInput(event);
              }}
              type="text"
              placeholder="Enter name"
              className="form-control rounded-0"
            />
            <span className="text-danger">{errors?.name}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={(event) => {
                handleInput(event);
              }}
              type="email"
              placeholder="Enter email"
              className="form-control rounded-0"
            />
            <span className="text-danger">{errors?.email}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={(event) => {
                handleInput(event);
              }}
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
            />
            <span className="text-danger">{errors?.password}</span>
          </div>
          <button className="btn btn-success w-100">Sign up</button>
          <p>You are agree to our terms and policies</p>
          <Link to="/" className="btn btn-default border bg-light w-100">
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
}
