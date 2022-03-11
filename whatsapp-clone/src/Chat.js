import React, {useEffect, useState} from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import db from "./firebase.js"
import firebase from 'firebase/compat/app';
import {useParams} from "react-router-dom";
import { useStateValue } from './StateProvider.js';
import { SearchOutlined,InsertEmoticon,Mic, MoreVert,AttachFile} from '@material-ui/icons';
import "./chat.css"
function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
      if (roomId) {
        db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
          setRoomName(snapshot.data().name)
        ))
        db.collection("rooms").doc(roomId).collection("messages").orderBy
        ('timestamp','asc').onSnapshot(snapshot => (
          setMessages(snapshot.docs.map(doc => doc.data()))
        ))
      }
    }, [roomId])
    


    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
      
    }, [roomId]);
    const sendMessage = (e) => {
      e.preventDefault();
      console.log('you typed a message', input);

      db.collection('rooms').doc(roomId).collection
      ('messages').add({
        messages: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
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
          {messages.map(message => (
            <p className={`chat__message ${ true && 'chat__reciever'}`}>
            <span className='chat__name'>{message.name}</span>
               {message.messages}
                <span className='chat__timestamp'>
                  {new Date(message.timestamp?.toDate()).toUTCString()}
                  </span></p>

          ))}
            
            
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