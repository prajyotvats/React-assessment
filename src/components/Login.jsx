import React, { useState } from "react";
import url from "../assets/login-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = input;

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    // navigate("/login");
  }
  const getData = JSON.parse(localStorage.getItem("user")) || [];

  function handleSubmit(e) {
    e.preventDefault();
    const user = getData.filter((item) => {
      if (item.email == email && item.password == password) {
        return true;
      }
    });
    if (user.length != 0) {
      alert("login successful");
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
    // localStorage.setItem("user", JSON.stringify(input));
    console.log(user);
  }
  return (
    <div>
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
              <input type="submit" value="Login" className="btn" />
            </form>
            <div>
              Don't have Account,<Link to="/register"> Register!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
