import React, { useState,useEffect, useRef } from 'react'
import {Avatar} from '@material-ui/core'
import './ChatMessage.css'
function ChatMessage({username,messages,profile}) {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);
  
    return (
        <div className="ChatMessage" >
            <div className="Chatmessage__profile">
                <Avatar style={{width:30,height:30}} src={profile}/>
                <div className='Chatmessage__info'>
                <h4 className='Chatmessage__text'>{username}</h4>
                <p>{messages}</p>
                <div ref={messagesEndRef} />

             </div>
            </div>
        </div>
    )
}

export default ChatMessage
