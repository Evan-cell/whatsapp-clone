import React from 'react'
import "./Sidebar.css"
import Sidebarchat from "./Sidebarchat"
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, MoreVert,Chat, SearchOutlined } from '@material-ui/icons';
function Sidebar() {
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
            <Sidebarchat />
            </div>
          </div>
          
  )
}

export default Sidebar