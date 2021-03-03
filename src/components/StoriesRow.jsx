import React from 'react'
import './StoriesRow.css'
import {Avatar} from '@material-ui/core'

function StoriesRow({src,name,profile}) {
    return (
        <div className='StoriesRow'>
            <div className='StoriesRow__cont'>
                {profile && <Avatar className="StoriesRow__avatar"src={profile}/>}
                 {src && <img className="StoriesRow__img" src={src} alt=''/>}
                <p className="StoriesRow__name">{name}</p>
            </div>
        </div>
    )
}

export default StoriesRow
