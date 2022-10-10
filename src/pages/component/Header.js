import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase/FirebaseInit";
import '../assets/Style.scss';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles(() => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: "rgba(255,255,255,1)",
      boxShadow: 24,
      padding: "30px 60px",
      borderRadius: "12px",
    },
  }));

function Header() {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [posts, setPosts] = useState([]);
    const [openSignup, setOpenSignup] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

const navigate = useNavigate()
const handleClickButton = ()=>{
    //useHistory
    navigate('/')
}
const handleClickButtonLogin = ()=>{
    //useHistory
    navigate('/Login')
}
useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user, username]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => alert(err.message));
    setOpenSignup(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
    setOpenLogin(false);
    setEmail("");
    setPassword("");
  };


return (
    <div className="headerContainer">
    <button className="btn header logo" type="button" onClick={handleClickButton}>
        <i className="fa-sharp fa-solid fa-house"></i>
    </button>
    {user ? (
            <button className="btn header login" onClick={() => auth.signOut()}>
              Logout
            </button>
          ) : (
            <div className="app__headerButtons">
              <button
                className="btn header login"
                // onClick={() => setOpenLogin(true) || setOpenSignup(false)}
                onClick={handleClickButtonLogin}
              >
                Log in
              </button>
            </div>
          )}
    </div>
);
}

export default Header;

