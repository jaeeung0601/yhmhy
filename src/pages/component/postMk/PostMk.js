import React, { useState, useEffect } from "react";
import "./PostMk.css";
import Avatar from "@material-ui/core/Avatar";
import { db, fb } from "../../../firebase/FirebaseInit";
import { doc, updateDoc, deleteField, getFirestore, deleteDoc } from "firebase/firestore";


function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const database= getFirestore();
  const docRef = doc(database, "marketposts", postId);
  async function onDelete (e) {
    const right = window.confirm("정말로 이 글을 삭제할까요?");
    if (right) {
        e.preventDefault();
        await deleteDoc(docRef);
    }};


  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("marketposts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);
  const postComment = (e) => {
    e.preventDefault();
    db.collection("marketposts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: fb.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}

        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {
        <div className={comments.length > 0 ? "post__comments" : ""}>
          {comments.map((comment, index) => (
            <p doc={comment.username} key={index}>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          ))}
        </div>
      }
      {user && (
        <form className="comment__form">
          <div className="comment__wrapper">
            <input
              className="comment__Input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="comment__button text__button"
              disabled={!comment}
              onClick={postComment}
              type="submit"
            >
              Post
            </button>
            <button
              className="comment__button text__button" 
              onClick={onDelete}>
              Delete
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Post;