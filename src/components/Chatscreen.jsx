import './Chatscreen.css'
import { useState } from 'react'

import React from 'react'

const Chatscreen = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="TACPRACTICE LOGO" />
        </div>
        <div className="nav-right">
        <div className="nav-buttons">
          <button className="nav-btn">Button 1</button>
          <button className="nav-btn">Button 2</button>
          <button className="nav-btn">Button 3</button>
        </div>
        <div className="user-info">
          <span className="username">Username</span>
          <img src="user-icon.png" alt="User Icon" className="user-icon" />
        </div>
        </div>
      </nav>
  
    <main className="chat-container">
      <div className="chat-window">
        {/* Messages will appear here */}
      </div>
      <div className="input-area">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
        />
        <button className="send-btn">Send</button>
      </div>
    </main>
  </div>
  
  )
}

export default Chatscreen