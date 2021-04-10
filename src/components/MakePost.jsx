import React,{useState,useReducer,useEffect,useRef } from 'react'
import {Avatar} from '@material-ui/core'
import './MakePost.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useStateValue } from '../StateProvider';
import db from './firebase'
import NearMeIcon from '@material-ui/icons/NearMe';
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase'
import MakeComment from './MakeComment'
// Hook
function useToggle(initialValue = false){
  // Returns the tuple [state, dispatch]
  // Normally with useReducer you pass a value to dispatch to indicate what action to
  // take on the state, but in this case there's only one action.
  return useReducer((state) => !state, initialValue);
}

function MakePost({ profile, image, name, timestamp, message}) {
  const[liked,setLiked] = useToggle(false)
  const[commented,setCommented] = useState(false)
  const[likeCount,setLikeCount] = useState(0)
  const color = liked ? '#197ed1' : 'gray';
  //   ************************
    const[comments,setComments] =useState([])
    const [commentinput, setCommentInput] = useState('');
    const[{user},dispatch] = useStateValue();
   
    //   ************************
    useEffect(() => {
      db.collection('comments').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setComments(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
      })
    
    }, [])
    
    const HandleComment =(e)=>{
        e.preventDefault();
        db.collection('comments').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            comment: commentinput,
            profile: user.photoURL,
            username: user.displayName,
          })
        
          setCommentInput('');
      
    }




    return (
        <div className="MakePost">
      <div className="MakePost__top">
        <Avatar src={profile} className="MakePost__avatar" />
        <div className="MakePost__topInfo">
          <h3>{name}</h3>
          <p >{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="MakePost__bottom">
        <p>{message}</p>
      </div>
      <div className="MakePost__image">
        <img src={image} alt="" />
      </div>
      
      {likeCount > 0 &&  <div className='MakePost__like-count'>
        <div className="MakePost__like-bg" >
        <ThumbUpIcon style={{fontSize:14,color:'#fff'}}/>
        </div>
        <p>{likeCount} Likes</p>
      </div>
      }
      <div className="MakePost__options">
       <div onClick={()=>{setLiked(true);setLikeCount(liked ? 0 : likeCount + 1)}} className="MakePost__option">
          <ThumbUpIcon style={{color:`${color}`}}/>
          <p style={{color:`${color}`}}>Like</p>
        </div>
        <div onClick={()=>setCommented(true)} className="MakePost__option">
          <ChatBubbleOutlineIcon/>
          <p>Comment</p>
        </div>
        <div className="MakePost__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
       
      </div>
      <div>
    {commented &&  <div className="MakePost__comments">
           
           {comments.map((comment) => (
                 <MakeComment
                  key={comment.id}
                  profile={comment.data.profile}
                  comment={comment.data.comment}
                  timestamp={comment.data.timestamp}
                  username={comment.data.username}
      />
      ))}
           
              
            </div>}
                        
            {commented &&   <div className='MakePost__form'>
               <Avatar src={profile} className="MakePost__avatar" />
               <input 
               value={commentinput}
                onChange={(e)=>setCommentInput(e.target.value)} type='text' placeholder='დაწერეთ კომენტარი...'/>
              {commentinput.length > 0 && <SendIcon onClick={HandleComment}  style={{color:'#095fcf',marginRight:20}}/> }
                        </div>}
                        </div>
                        </div>

    )
}

export default MakePost
