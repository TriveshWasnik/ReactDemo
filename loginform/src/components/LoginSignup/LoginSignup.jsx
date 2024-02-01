import React, { useState } from "react";
import "./LoginSignup.css";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <h2>{action}</h2>
      <div className="input-fields">
        {action === "Login" ? (
          ""
        ) : (
          <input type="text" placeholder="Enter Name Here" />
        )}
        <input type="email" placeholder="Enter Email Here" />
        <input type="password" placeholder="Enter Password Here" />
      </div>
      {action === "Login" ? (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      ) : (
        ""
      )}
      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
