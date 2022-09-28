import { db, fb, auth } from "../firebase/FirebaseInit";
import AuthForm from "./component/AuthForm";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
    
    const onSocialClick = async (event) => {
        const { //ES6
            target:{name},
        } = event;
        let provider;
        if (name === "google"){
            provider = new fb.auth.GoogleAuthProvider();
        } else if (name === "github"){
            provider = new fb.auth.GithubAuthProvider();
        }
        await auth.signInWithPopup(provider);
    };

    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faTwitter}
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
export default Auth;