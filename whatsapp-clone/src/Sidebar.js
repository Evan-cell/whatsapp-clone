import React, {useEffect, useState} from 'react'
import "./Sidebar.css"
import db from "./firebase.js"
import Sidebarchat from "./Sidebarchat"
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, MoreVert,Chat, SearchOutlined } from '@material-ui/icons';
function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
   const unsubscribe = db.collection('rooms').onSnapshot((snapshot )=> 
      setRooms(
        snapshot.docs.map((doc)=> ({
          id: doc.id,
          data: doc.data(),
        }))
        )
    );
    return () => {
      unsubscribe();
    }
  }, []);
  return (
      <div className='sidebar'>
          <div className='sidebar__header'>
            <Avatar />
            <div className='sidebar__headerRight'>
              <IconButton>
              <DonutLarge />
              </IconButton>
              <IconButton>
              <Chat />
              </IconButton>
              <IconButton>
              <MoreVert />
              </IconButton>
              
              </div>
            </div>
          <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
            <SearchOutlined />
            <input placeholder='search a chat' type='text' />
            </div>
            </div>
          <div className='sidebar__chats'>
            <Sidebarchat addNewChat/>
            {rooms.map(room =>(
              <Sidebarchat key ={room.id} id={room.id} name ={room.data.name} />
            ))}
            </div>
          </div>
          
  )
}

export default Sidebar