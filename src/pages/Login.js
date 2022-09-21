import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./component/Header";
import './assets/Style.scss';

function Login() {
    const navigate = useNavigate()
  return (
    <div>
        <Header />
    </div>
  );
}
export default Login;