import '../assets/Style.scss';
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate()
const handleClickButton = ()=>{
    //useHistory
    navigate('/Home')
}
const handleClickButtonLogin = ()=>{
    //useHistory
    navigate('/Login')
}
return (
    <div>
    <button className="btn header logo" type="button" onClick={handleClickButton}>
        Logo
    </button>
    <button className="btn header login" type="button" onClick={handleClickButtonLogin}>
         LogIn
    </button>
    </div>
);
}

export default Header;

