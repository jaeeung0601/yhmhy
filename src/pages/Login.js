import { auth, firebaseInstance } from "../firebase/FirebaseInit";
import AuthForm from "./component/AuthForm";
import "./assets/loginStyle.scss"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { 
    faHouse,
 } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    
    const onSocialClick = async (event) => {
        const { //ES6
            target:{name},
        } = event;
        let provider;
        if (name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await auth.signInWithPopup(provider);
        document.location.href = '/'
    };

    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faHouse}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
        <AuthForm />
        <div className="authBtns">
            <button onClick={onSocialClick} name="google" className="authBtn">
                Continue with Google<FontAwesomeIcon icon={faGoogle} />
            </button>
            <button onClick={onSocialClick} name="github" className="authBtn">
                Continue with Github <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
    </div>
    );
};
export default Login;