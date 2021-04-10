import React, { useState,useEffect, useRef } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {Avatar} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {useStateValue} from '../StateProvider'
import Modal from './Modal'
import SendIcon from '@material-ui/icons/Send';
import ChatMessage from './ChatMessage';
import db from './firebase'
import fb from '../images/download.png'
import firebase from 'firebase'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const[messages,setMessages] =useState([])
//   ************************
  const [inputmsg, setInputmsg] = useState('');
  const[{user},dispatch] = useStateValue();
 
  //   ************************
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  
  }, [])
  
  const handleMsg =(e)=>{
      e.preventDefault();
      db.collection('messages').add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: inputmsg,
          profile: user.photoURL,
          username: user.displayName,
        })
      
        setInputmsg('');
  }

  //   ************************

  //   ************************


    return (
        <div className="header">
            <div className="header__left">
                <img 
                src={fb}
                alt=""/>
                  <div className='header__input'>
                <SearchIcon style={{color:'gray',paddingLeft:10}}/>
                <input type="text" placeholder="ძებნა Facebook-ზე"/>
                </div>
            </div>
          
            <div className="header__mid">
                <div className='header__opt-active'>
                <HomeIcon  fontSize='large' />
                </div>
                <div className='header__opt'>
                <PeopleIcon fontSize='large'/>
                   </div>
                <div className='header__opt'>
                <LiveTvIcon fontSize='large'/>

                </div>
                <div className='header__opt'>
                <SupervisedUserCircleIcon fontSize='large'/>

                </div>
                <div className='header__opt'>
                <SportsEsportsIcon fontSize='large'/>

                </div>
            </div>

            <div className="header__right">
                <div className='header__profile'>
                    <Avatar  src={user.photoURL} style={{width:30,height:30}} />
                    <p>{user.displayName}</p>
                </div>
               <div className="header__icon">
               <AddIcon/>
                </div> 
                <div className="header__icon" onClick={() => setIsOpen(true)} >
               <MessageIcon/>
                </div> 
                <div className="header__icon">
               <NotificationsIcon/>
                </div> 
                <div className="header__icon">
               <KeyboardArrowDownIcon/>
                </div> 
            </div>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className='Chat'>
               <div className="Chat__Top">
                    <Avatar style={{width:30,height:30}} src={user.photoURL}/>
                    <p>{user.displayName}</p>  
                </div>
                <div className="Chat__messages"  >
                {messages.map((message) => (
                 <ChatMessage
                  key={message.id}
                  profile={message.data.profile}
                  messages={message.data.message}
                  timestamp={message.data.timestamp}
                  username={message.data.username}
      />
      ))}
                </div>
                <div className="header__form">
                <input 
                       value={inputmsg}
                       onChange={(e)=>setInputmsg(e.target.value)} type='text' placeholder='Aa'/>
                       {inputmsg.length > 0 &&
                       <SendIcon onClick={handleMsg}  style={{color:'#095fcf',marginRight:20}}/>
                           }
                </div>
                   
                      </div>
        </Modal>
      </div>

    )
}

export default Header