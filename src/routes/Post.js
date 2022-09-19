import React from 'react'
import './assets/Style.css';

function Post() {
  return (
    <div className='post'>
    <h3>username</h3>
    {/* header -> avatar -> username */}
    
    <img className='postImage'  src="https://picsum.photos/320/240?random=5#.YygKSefSkWs.link"
    alt="" />
    {/* image */}

    <h4>Username: caption</h4>
    {/* username -> caption */}

    </div>
  )
}

export default Post