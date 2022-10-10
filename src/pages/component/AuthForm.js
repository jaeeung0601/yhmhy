import { auth } from "../../firebase/FirebaseInit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/loginStyle.scss"

// const inputStyles = {};
const AuthForm = () => {
    const navigate = useNavigate()
    const handleClickButton = ()=>{
        //useHistory
        navigate('/')
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onChange = (event) => {
        //console.log(event.target.name);
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault(); //기본 행위가 실행되는 것을 막아서 내가 컨트롤 할 수 있도록 해줌
        try {
            let data;
            if (newAccount) { //create account
            data = await auth.createUserWithEmailAndPassword(email, password);
        } else { //log in
            data = await auth.signInWithEmailAndPassword(email, password);
            document.location.href = '/'
        }
        console.log(data);
    } catch(error){
        setError(error.message);
    }};

    return (
        <>
        <button className="btn header logo" type="button" onClick={handleClickButton}>
        <i className="fa-sharp fa-solid fa-house"></i>
        </button>
        <form onSubmit={onSubmit} className="container">
            <input name="email" 
            type="email" 
            placeholder="Email" 
            required value={email}
            onChange={onChange}
            className="authInput"
            />
            <input name="password" 
            type="password" 
            placeholder="Password" 
            required value={password}
            className="authInput"
            onChange={onChange}
            />
            <input type="submit" 
            className="authInput authSubmit"
            value={newAccount ? "Create Account" : "Sign In"} 
            />
            {error && <span className="authError">{error}</span>}
        </form>
        <span onClick={toggleAccount} className="authSwitch">
            {newAccount ? "Sign In" : "Create Account"}
        </span>
        </>
    );
}

export default AuthForm;