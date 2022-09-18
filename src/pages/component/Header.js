import '../assets/Style.css';
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate()
return (
    <div>
    <button class="logo" type="button" onclick="location.href='/'">
        Logo
    </button>
    <button class="login" type="button" onclick="location.href='/Login'">
         LogIn
    </button>
    </div>
);
}

export default Header;

