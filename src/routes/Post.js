import React from 'react'
import './assets/Post.css';
import Avatar from '@mui/material/Avatar';


function Post() {
  return (
    <div className='post'>
      <div className='postHeader'>
      <Avatar
        className='postAvater'
        alt='RafeQazi'
        src="/static/images/avater/1.png"
      />
      <h3>username</h3>
      </div>
    {/* header -> avatar -> username */}
    
    <img className='postImage'  src="https://picsum.photos/320/240?random=5#.YygKSefSkWs.link"
    alt="" />
    {/* image */}

    <h4 className='postText'><strong>Username:</strong> captiondd</h4>
    {/* username -> caption */}

    </div>
  )
}

export default Post