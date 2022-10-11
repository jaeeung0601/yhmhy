import React, { useState, useEffect } from "react";
import PostMk from "./component/postMk/PostMk.js";
import "./assets/Community.scss";
import Header from "./component/Header";
import { db, auth } from "../firebase/FirebaseInit";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import ImageUpload from "./component/imageUpload/MktImageUpload";
import "./Community.css"

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


function MktCommunity() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [marketposts, setMkPosts] = useState([]);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

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
    db.collection("marketposts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMkPosts(
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
    <div className="app">
      <Header />
      <div className='MainContainer'>
      <Modal open={openSignup} onClose={() => setOpenSignup(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>

          </center>
          <form className="app__signUp">
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary__button" type="submit" onClick={signUp}>
              Sign up
            </button>
          </form>

        </div>
      </Modal>
      <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>

          </center>
          <form className="app__signUp">
            <input
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary__button" type="submit" onClick={login}>
              Log in
            </button>
          </form>
          <center className="authFooter">
            <small>

            </small>
          </center>
        </div>
      </Modal>
      <div className="timeline">
        {user && <ImageUpload user={user} />}
        {marketposts.map(({ id, post }) => (
          <PostMk
            key={id}
            postId={id}
            user={user}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default MktCommunity;