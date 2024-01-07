import "../Login/Login.css";
import React, { useState } from "react";
``
const Login = ({ login, isLogin }) => {
  // console.log(login);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    userName: userName,
    password: password,
  };

  return (
    <>
      <div className="login mx-auto">
        <div className="" style={{ marginTop: "200px" }}>
          <div className="d-flex align-items-center justify-content-around">
            <h2 className="login-text">Login</h2>
          </div>
          <div>
            <div className="mt-3 mb-3">
              <input
                className="login-inp"
                type="text"
                placeholder="Login"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="login-inp-2"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="login-btn"
              onClick={() => login(params)}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
