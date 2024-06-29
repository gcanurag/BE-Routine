import React, { useState } from 'react';
import axios from "axios";
import { backendUrl } from '../../utils/utils';

function Signup() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const { user, setUser } = useContext(UserContext);

  axios.defaults.withCredentials = true;
  // axios.defaults.headers.common["x-auth-token"];

  function handleUsernameInput(event) {
    setUsername(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password,email);
    const { data: userData } = await axios({
      method: "POST",
      data: { username,email, password },
      withCredentials: true,
      url: backendUrl + "/user/register",
    });

    if (userData) {
      localStorage.setItem("user", userData.username);
      // setUser(userData.username);
      // console.log("context user: ", user);
      window.location = "/user/profile";
    }
  }
  return (
    <div>
      <div id="wrap" className="wrapper">
        <div className="title">Signup</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              required
              onChange={handleUsernameInput}
              autoFocus
            />
            <label>User Name</label>
          </div>
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
          </div>

          <div className="field">
            <input type="submit" value="Signup" />
          </div>
          {/* <div className="signup-link">
            Not a member? <a href="/login">Signup now</a>
          </div> */}
                  {/* TODO */}
        </form>
      </div>
    </div>
  );
}

export default Signup;