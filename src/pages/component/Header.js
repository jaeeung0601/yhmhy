import '../assets/Style.scss';
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate()
return (
    <div>
    <button class="btn header logo" type="button" onclick="location.href='/'">
        Logo
    </button>
    <button class="btn header login" type="button" onclick="location.href='/Login'">
         LogIn
    </button>
    </div>
);
}

export default Header;

