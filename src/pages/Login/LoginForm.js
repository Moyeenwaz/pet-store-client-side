import React, { UseState } from "react";
import "./LoginForm.css";

import { useState } from "react";

export const LoginForm = () => {
  const [inputText, setInputText] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleUsernameOnChange = (e) => {
    setInputText({
      ...inputText,
      username: e.target.value,
    });
  };
  const handlePasswordOnChange = (e) => {
    setInputText({
      ...inputText,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="login">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="welcome-message">Login</p>
          <input
            type="email"
            onChange={handleUsernameOnChange}
            value={inputText.username}
            placeholder="Email Address"
            className="input-field"
          />
          <input
            type="password"
            onChange={handlePasswordOnChange}
            value={inputText.password}
            placeholder="Password"
            className="input-field"
          />
          <div className="forget">
            <div className="remember">
              <input type="checkbox" className="checkbox" required />
              <label>Remember me </label>
            </div>
            <div className="forgotcontainer">
              <a href="#" className="forgotpassword">
                Forgot password
              </a>
            </div>
          </div>
          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};
