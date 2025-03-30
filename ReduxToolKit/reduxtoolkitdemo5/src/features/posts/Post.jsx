import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPost } from './postSlics'
function Post() {
    const posts=useSelector((state)=>state.post.posts)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
  return (
    <div>
    <h2>List Of Posts</h2>  
    <ul>
    {
        posts.map((post)=>{
            return <li key={post.id}>
                id:{post.id}
                <br />
                Title:{post.title}
            </li>
        })
    }
    </ul>
    </div>
  )
}

export default Post
