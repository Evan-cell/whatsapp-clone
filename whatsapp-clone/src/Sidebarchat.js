import React, {useEffect, useState} from 'react'
import { Avatar } from "@material-ui/core";
import "./Sidebarchat.css"
function Sidebarchat({addNewChat}) {
    const [seed, setSeed] = useState('');
    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
      
    }, []);

    const createChat = () => {}
    
  return !addNewChat ?(
    <div className='sidebar__chat'>
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarchat__info'>
            <h1>room name</h1>
            <p>last message...</p>
            </div>
        </div>
  ):(
      <div onClick={createChat} className='sidebarchat'>
          <h2>add new chat</h2>
          </div>
  );
}

export default Sidebarchat