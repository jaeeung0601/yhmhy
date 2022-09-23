import '../assets/Style.scss';
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate()
const handleClickButton = ()=>{
    //useHistory
    navigate('/')
}
const handleClickButtonLogin = ()=>{
    //useHistory
    navigate('/Login')
}
return (
    <div className="headerContainer">
    <button className="btn header logo" type="button" onClick={handleClickButton}>
        <i className="fa-sharp fa-solid fa-house"></i>
    </button>
    <button className="btn header login" type="button" onClick={handleClickButtonLogin}>
         LogIn
    </button>
    </div>
);
}

export default Header;

