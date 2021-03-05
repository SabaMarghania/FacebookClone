import React, {useEffect, useRef } from 'react'
import {Avatar} from '@material-ui/core'
import './MakeComment.css'
function MakeComment({username,comment,profile}) {
  

    return (
        <div className="MakeComment" >
            <div className="MakeComment__profile">
                <Avatar style={{width:30,height:30}} src={profile}/>
                <div className='MakeComment__info'>
                <h4 className='MakeComment__text'>{username}</h4>
                <p>{comment}</p>
             </div>

            </div>
        </div>
    )
}

export default MakeComment
