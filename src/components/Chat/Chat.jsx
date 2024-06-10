import React from 'react'
import './Chat.scss'


const Chat = () => {
  return (
    <div>
        <div class="card">
    <div class="chat-header">Chat</div>
      <div class="chat-window">
        <ul class="message-list"></ul>
      </div>
      <div class="chat-input">
          <input type="text" class="message-input" placeholder="Type your message here"/>
          <button class="send-button">Send</button>
      </div>
    </div>
    </div>
  )
}

export default Chat