import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPost } from './poslice'
function Post() {
    const posts=useSelector((state)=>state.posts.posts)
    const [showPosts,setShowPosts]=useState(false)
    const dispatch=useDispatch()

    const handleLoadPosts=()=>{
        dispatch(fetchPost())
        setShowPosts(true)
    }
  return (
    <div>
      {
        (showPosts)?
        <ul>
             {
                 posts.map((post)=>{
                    return(<li key={post.id}>
                        id:{post.id}
                        <br />
                        Title:{post.title}
                    </li>)
                 })
             }
        </ul>:
        <button onClick={handleLoadPosts}>load posts</button>
      }
    </div>
  )
}

export default Post
