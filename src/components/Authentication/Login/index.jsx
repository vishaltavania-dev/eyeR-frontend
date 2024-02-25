import React from "react";
import "./Login.css";
export default function index() {
  return (
    <div className="login-main-container">
      <div>
        <img
          src="./assets/login-dashboard.jpg"
          alt=""
          className="login-dashboard-img"
        />
      </div>
      <div className="login-box-container">
        <div className="login-input-container">
          <div className="login-heading-text">Welcome back</div>
          <div>Log in your account</div>
          <form action="">
            <div>
                Email
                <input type="text" />
            </div>
            <div>
                Password
                <input type="text" />
            </div>
            <div>
              <input type="button" value="" />Remember me
            </div>
            <button type="submit">Continue</button>

          </form>
        </div>
      </div>
    </div>
  );
}
