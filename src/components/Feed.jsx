import React,{useState,useEffect} from 'react'
import './feed.css'
import Posts from './Posts'
import MakePost from './MakePost';
import StoriesRowCol from './StoriesRowCol';
import db from './firebase'
function Feed() {
    const[posts,setPosts] =useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
      }, [])
    return (
        <div className="stories">
        <div className="stories__cont">
            <StoriesRowCol/>
        </div>
        <Posts/>
        {posts.map(post => (
      <MakePost
      key={post.id}
      profile={post.data.profile}
      message={post.data.message}
      timestamp={post.data.timestamp}
      name={post.data.name}
      image={post.data.image}
      />
      ))}
           
        </div>
    )
}

export default Feed
