import React, { useState } from "react";
import url from "../assets/login-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Login.css";

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const getData = JSON.parse(localStorage.getItem("user")) || [];

  function handleSubmit(e) {
    e.preventDefault();
    getData.push(input);
    localStorage.setItem("user", JSON.stringify(getData));
    navigate("/login");
  }

  return (
    <>
      <div className="main">
        <div className="bg-image">{/* <img src={url} alt="bg Image" /> */}</div>
        <div className="cont">
          <div className="cont-center">
            <div className="logo-ship">
              <img src={logo} alt="logo" />
            </div>
            <div className="header">
              <h1>Welcome </h1>
              <h4>Login to Labs Monitoring System</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label>Username</label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-block">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-block">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn">Register</button>
            </form>
            <div>
              Already have an Account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
