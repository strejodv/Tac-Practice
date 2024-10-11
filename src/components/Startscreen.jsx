import React from 'react'
import './Startscreen.css'

const startScreen = ({ onStartChat }) => {
  return (
    <div className="start-screen">
        <button onClick={onStartChat} className="start-screen-btn">Tac</button>
    </div>
  )
}

export default startScreen