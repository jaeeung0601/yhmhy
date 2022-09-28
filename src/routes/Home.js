import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import { v4 as uuidv4 } from "uuid";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
    //console.log(userObj);
    const [nweet, setNeweet] = useState("");
    const [nweets, setNeweets] = useState([]);
    const [attachment, setAttachment] = useState("");
    /*const getNeweets = async() => {
        //get은 QuarySnapshot을 return
        const dbNweets = await dbService.collection("nweets").get();
        //내 state에 있는 각각의 document.data()를 console.log
        dbNweets.forEach((document) => //console.log(document.data())); 
        { const nweetObject = {
            ...document.data(),
            id: document.id,
        };
            //모든 이전 nweets에 대해 배열을 리턴, 그 배열은 새로 작성한 트윗과 그 이전 것들
            //값 대신에 함수를 전달할 수 있음, 함수를 전달하면 리액트는 이전 값에 접근할 수 있게 해줌
            setNeweets(prev => [nweetObject, ...prev]);
        });
    };*/
    useEffect(() => {
        //getNeweets();
        //위 방식과 이것 중 하나 선택해서 쓰면 됨
        //이 방식은 더 적게 re-render 하기 때문에 더 빠르게 실행되도록 만들어줌
        //무언가를 지우거나 업데이트 하든, 뭘 하든 실행이 됨
            dbService.collection("nweets").onSnapshot(snapshot => {
            const nweetArray = snapshot.docs.map(doc => ({
                id:doc.id,
            ...doc.data(),
        }));
        setNeweets(nweetArray);
        });
    }, []);
    return(
        <div className="container">
            <NweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
            {nweets.map((nweet) => (
            <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
            </div>
        </div>
    )
};
export default Home;