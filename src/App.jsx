import "./App.css";
import Login from "./companents/Login/Login";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Main from "./companents/Main/Main";

function App() {
  const { pathname } = useLocation();

  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const user = {
    username: "Oybek",
    password: "007700",
  };

  const useAuth = (params) => {
    return user.username === params.userName &&
      user.password === params.password
      ? navigate("/main")
      : alert("xato");
  };

  return (
    <>
      {pathname === "/" ? <Login isLogin={auth} login={useAuth} /> : <Main />}
    </>
  );
}

export default App;
