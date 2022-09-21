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
    <h1>fassaddsssdsdakl</h1>
    </div>

    <Post username="cleverqazi" caption="wow it works" imageUrl="https://picsum.photos/320/240?random=5#.YygKSefSkWs.link" />
    <Post username="sdadsa" caption="hello dped" imageUrl="https://picsum.photos/200/300" />
    <Post username="fwasdd" caption="안녕하세요" imageUrl="https://picsum.photos/200" />


    </div>
  );
}
export default App;
