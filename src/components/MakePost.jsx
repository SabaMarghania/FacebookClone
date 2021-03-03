import React,{useState,useReducer} from 'react'
import {Avatar} from '@material-ui/core'
import './MakePost.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
// Hook
function useToggle(initialValue = false){
  // Returns the tuple [state, dispatch]
  // Normally with useReducer you pass a value to dispatch to indicate what action to
  // take on the state, but in this case there's only one action.
  return useReducer((state) => !state, initialValue);
}

function MakePost({ profile, image, name, timestamp, message}) {
  const[liked,setLiked] = useToggle(false)
  const[likeCount,setLikeCount] = useState(0)
  const color = liked ? '#197ed1' : 'gray';
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
            {/* onClick={() => { func1(); func2();}} */}
       <div onClick={()=>{setLiked(true);setLikeCount(liked ? 0 : likeCount + 1)}} className="MakePost__option">
          <ThumbUpIcon style={{color:`${color}`}}/>
          <p style={{color:`${color}`}}>Like</p>
        </div>
        <div className="MakePost__option">
          <ChatBubbleOutlineIcon />
          <p >Comment</p>
        </div>
        <div className="MakePost__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
       
      </div>
    </div>
    )
}

export default MakePost
