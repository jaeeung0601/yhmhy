import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ( {nweetObj,isOwner} ) => {
    const [editing, setEditing] = useState(false); //editing mode인지 아닌지를 알려줌
    const [newNweet, SetNewNweet] = useState(nweetObj.text); //input에 입력된 text를 업데이트 해줌
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        //console.log(ok);
        if(ok){
            //delete
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            await storageService.refFromURL(nweetObj.attachmentUrl).delete();
        }
    };
    const toggleEditing =  () => setEditing(prev => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        //console.log(nweetObj, newNweet);
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    };
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        SetNewNweet(value);
    };
    return (
    <div className="nweet">
        {editing ? (
            <>
            <form onSubmit={onSubmit} className="container nweetEdit">
                <input 
                    type="text" 
                    placeholder="Edit your nweet" 
                    value={newNweet} 
                    required 
                    autoFocus
                    onChange={onChange}
                    className="formInput"
                />
                <input type="submit" value="Update Nweet" className="formBtn" />
            </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
            </span>
            </>
        ) : (
        <>
            <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl && (
                <img src={nweetObj.attachmentUrl} width="50px" height="50px" />
            )}
            {isOwner && (
            <div class="nweet__actions">
                <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
                </span>
            </div>
            )}
        </> 
        )}
    </div>
    );
};
export default Nweet;