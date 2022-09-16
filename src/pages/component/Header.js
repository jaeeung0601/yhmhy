import '../assets/Style.css';
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate()
return (
    <button class="logo" type="button" onclick="location.href='/'"> Logo</button>
);
}

export default Header;

