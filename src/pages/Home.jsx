import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

// This component its the container for the chat and the main page of the app
const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home