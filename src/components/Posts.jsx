import React,{useState} from 'react'
import {Avatar} from '@material-ui/core'
import './posts.css'
import firebase from 'firebase'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import db from './firebase';
import { useStateValue } from '../StateProvider';
function Posts() {
    const [input, setInput] = useState('');
    const [inputURL, setInputURL] = useState('');
    const[{user},dispatch] = useStateValue();
    const handleSubmit =(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profile: user.photoURL,
            name: user.displayName,
            image: inputURL,
            
          })
          
          setInput('');
          setInputURL('');
    }
    return (
        <div className="posts">
            <div className='posts__top'>
                <Avatar src={user.photoURL}/>
                <form>
                <input
                value={input}
                className="posts__input"
                type='text'
                placeholder={`Whats on your mind,${user.displayName}`}
                onChange={(e)=>setInput(e.target.value)}
                />
                <input 
                value={inputURL}
                onChange={(e)=>setInputURL(e.target.value)}
                className="posts__url" 
                type='text'
                 placeholder="Image URL "/>

                </form>
               {input.length > 0 &&
              <button onClick={handleSubmit} type='submit' className='data-btn'>Hidden btn</button>
            }
              
            </div>
            <div className='posts__bottom'>
            <div className='btn posts__right-btn'><VideocamIcon style={{color:'red'}}/> პირდაპირი ეთერი</div>
            <div className='btn posts__left-btn'><PhotoLibraryIcon style={{color:'green'}}/> ფოტო/ვიდეო</div>
        </div>
        </div>
    )
}
export default Posts
