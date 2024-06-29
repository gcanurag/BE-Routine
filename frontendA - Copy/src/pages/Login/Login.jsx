import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { backendUrl } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "@reach/router";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate=useNavigate();
  axios.defaults.withCredentials = true;

 

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
    const { data: userData } = await axios({
      method: "POST",
      data: { email, password },
      withCredentials: true,
      url: backendUrl + "/user/login",
    });

    if (userData) {
      localStorage.setItem("user", userData.username);
      
     navigate("/user/profile");
    }
  }

  return (
    <div>
      <div id="wrap" className="wrapper">
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
         <div className="field">
            <input
              type="email"
              required
              onChange={e=>setEmail(e.target.value)}
              autoFocus
            />
            <label>Email</label>
          </div>


          <div className="field">
            <input type="password" required onChange={handlePasswordInput} />
            <label>Password</label>
          </div>

          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <div className="pass-link">
              <a href="/login">Forgot password?</a>
            </div>
          </div>

          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <a href="/login">Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
}
