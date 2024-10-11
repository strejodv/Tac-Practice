import React, { useState } from 'react'
import Startscreen from './components/Startscreen'
import Chatscreen from './components/Chatscreen'


function App() {
  const [isChatting, setIsChatting] = useState(false)

  const handleStartChat = () => {
    setIsChatting(true)
  }

  return (
    <div className="container">
    {isChatting ? (
      <Chatscreen />
    ) : ( 
      <Startscreen onStartChat={handleStartChat} />
    )}
    </div>
  )
}

   
export default App
