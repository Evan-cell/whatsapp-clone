import React, {useEffect, useState} from 'react'
import { Avatar } from "@material-ui/core";
import { Link} from "react-router-dom";
import db from "./firebase.js"
import "./Sidebarchat.css"
function Sidebarchat({id,name,addNewChat}) {
    const [seed, setSeed] = useState('');
    const [ messages, setMessages] = useState("")

    useEffect(() => {
      if (id) {
        db.collection('rooms')
        .doc(id)
        .collection
        ('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
          setMessages(snapshot.docs.map((doc)=>
          doc.data()))
        );
      }
    }, [id])    
    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
      
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter name for a chat");
        if (roomName){
            db.collection('rooms').add({
              name: roomName,
            })
        }
    }
    
  return !addNewChat ?(
    <Link to={`/rooms/${id}`}>
      <div className='sidebar__chat'>
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarchat__info'>
            <h1>{name}</h1>
            <p>{messages[0]?.messages}</p>
            </div>
        </div>
      </Link>
    
  ):(
      <div onClick={createChat} className='sidebar__chat'>
          <h2>add new chat</h2>
          </div>
  );
}

export default Sidebarchat