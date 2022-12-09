import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiElectric } from "react-icons/gi";
import "./Common.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      console.log("You have successfully logged in");
      localStorage.setItem("token", json.authToken);
      navigate("/");
      alert("successfully logged in");
    } else {
      alert("some error has been occured");
    }
    console.log(json);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-section">
      <div className="login-box auth-box">
        <div className="login-head auth-head">
          <GiElectric className="auth-icon" />

          <h2 className="auth-title">Log in</h2>
          <p>Login in to your account</p>
        </div>
        <div className="login-div auth-div">
          <form className="auth-form">
            <div className="email-input">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@email.com"
                onChange={onChange}
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={onChange}
              />
            </div>
            <button type="button" className="auth-btn" onClick={handleClick}>
              Log in
            </button>
          </form>
        </div>
        <p className="auth-option-p">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-option">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
