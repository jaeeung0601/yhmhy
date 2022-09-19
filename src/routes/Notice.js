import React from "react";
import '../App.css';
import './assets/Style.css';
import Post from "./Post";

function App() {
  return (
    <div className="App">
    <div className="Noticeheader">

      <img className="NoticeheaderImage"
      src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
      alt=""/>
    </div>
    <h1>게시판z</h1>

    <Post />

    </div>
  );
}
export default App;
