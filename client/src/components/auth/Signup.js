import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiElectric } from "react-icons/gi";
import "./Common.css";

const Signup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      console.log("you have successfully created an account");
      localStorage.setItem("token", json.authToken);
      navigate("/");
      alert("Account is been created");
    } else {
      alert("some error has occured");
    }
    console.log(json);
  };

  return (
    <div className="auth-section">
      <div className="signup-box auth-box">
        <div className="signup-head auth-head">
          <GiElectric className="auth-icon" />
          <h2 className="auth-title">Sign up</h2>
          <p>Welcome to the new world</p>
        </div>
        <div className="signup-div auth-div">
          <form className="auth-form">
            <div className="name-input">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Google TOmar"
                onChange={onChange}
              />
            </div>
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
            <button type="submit" className="auth-btn" onClick={handleClick}>
              Sign up
            </button>
          </form>
        </div>
        <p className="auth-option-p">
          Already have an account?{" "}
          <Link to="/login" className="auth-option">
            log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
