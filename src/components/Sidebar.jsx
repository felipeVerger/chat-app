import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

// This component is responsible for the navigation through the contacts
// Children Components: 
// Navbar: our user info and logout button
// Search: input to search for contacts
// Chats: the actual contacts we have chatted before
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar