import React, {useEffect, useState} from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import db from "./firebase.js"
import {useParams} from "react-router-dom";
import { SearchOutlined,InsertEmoticon,Mic, MoreVert,AttachFile} from '@material-ui/icons';
import "./chat.css"
function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("")

    useEffect(() => {
      if (roomId) {
        db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
          setRoomName(snapshot.data().name)
        ))
      }
    }, [roomId])
    


    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
      
    }, [roomId]);
    const sendMessage = (e) => {
      e.preventDefault();
      console.log('you typed a message', input);
      setInput=("");
    };
  return (
    <div className='chat'>
        <div className='chat__header'>
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
            <h3>{roomName}</h3>
            <p>lastseen....</p>
            </div>
            <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
              </IconButton>
              <IconButton>
              <AttachFile />
              </IconButton>
              <IconButton>
              <MoreVert />
              </IconButton>
                </div>
            </div>
        <div className='chat__body'>
            <p className={`chat__message ${ true && 'chat__reciever'}`}>
            <span className='chat__name'>kim</span>
                hello dudes 
                <span className='chat__timestamp'>22:37</span></p>
            
            </div>
        <div className='chat__footer'>
          <InsertEmoticon />
          <form>
          <input
           value={input} 
           onChange={(e) => setInput(e.target.value)} 
           placeholder='type a message' 
           type='text'/>
          <button onClick={sendMessage} type='submit'>send message</button>
          </form>
          
          <Mic />
          </div>
        </div>
  )
}

export default Chat