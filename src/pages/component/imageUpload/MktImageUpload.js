import React, { useState } from "react";
import { storage, db, fb } from "../../../firebase/FirebaseInit";
import "./ImageUpload.css";

function MktImageUpload({ user }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const [price, setPrice]= useState("");
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => {
        // Error function
        console.log(err);
        alert(err.message);
      },
      () => {
        // Complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // Post image inside db
            db.collection("marketposts").add({
              timestamp: fb.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              price: price,
              imageUrl: url,
              username: user.displayName,
            });
            setProgress(0);
            setCaption("");
            setPrice("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="imageUpload">
      <input
        type="text"
        placeholder="글을 작성해 주세요...."
        className=" textwir"
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
      />
      <input
        type="text"
        placeholder="가격을 기입해 주세요..."
        className=" textwir"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <progress className="progress" value={progress} max="100" />
      <div className="uploadCapBtn">
        <input className="uploadCap" type="file" onChange={handleChange} />
        <button className="primary__button uploadBtn" onClick={handleUpload}>
          Post
        </button>
      </div>
    </div>
  );
}

export default MktImageUpload;