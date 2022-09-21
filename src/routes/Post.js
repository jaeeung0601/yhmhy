import React from 'react'
import './assets/Post.css';
import Avatar from '@mui/material/Avatar';


function Post({username ,caption,imageUrl}) {
  return (
    <div className='post'>
      <div className='postHeader'>
      <Avatar
        className='postAvater'
        alt='RafeQazi'
        src="/static/images/avater/1.png"
      />
      <h3>{username}</h3>
      </div>
    {/* header -> avatar -> username */}
    
    <img className='postImage'  src={imageUrl} alt="" />
    {/* image */}

    <h4 className='postText'><strong>{username}</strong> {caption}</h4>
    {/* username -> caption */}

    </div>
  )
}

export default Post