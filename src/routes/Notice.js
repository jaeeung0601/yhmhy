import React from "react";
import '../App.css';
import './assets/Notice.css';
import Post from "./Post";

function App() {
  return (
    <div className="app">
    <div className="Noticeheader">

      <img className="NoticeheaderImage"
      src=" https://cdn-icons-png.flaticon.com/256/7207/7207414.png"
      alt=""/>
    <h1>fassadakl</h1>
    </div>
    <Post />

    </div>
  );
}
export default App;
