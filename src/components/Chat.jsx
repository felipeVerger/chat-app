import React, { useContext } from 'react'
import {AiOutlineUserAdd, AiFillVideoCamera} from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

// This component contains other cildren components to form the chat part
// Children Components:
// Messages: thes messages of the converation
// Input: the input to write messages
const Chat = () => {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <AiFillVideoCamera/>
          <AiOutlineUserAdd/>
          <FiMoreHorizontal/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat