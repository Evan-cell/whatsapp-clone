import React, {useEffect, useState} from 'react'
import { Avatar } from "@material-ui/core";
import "./chat.css"
function Chat() {
    const [seed, setSeed] = useState('');
    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
      
    }, []);
  return (
    <div className='chat'>
        <div className='chat__header'>
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>lastseen</p>
            </div>
            </div>
        <div className='chat__body'></div>
        <div className='chat__footer'></div>
        </div>
  )
}

export default Chat