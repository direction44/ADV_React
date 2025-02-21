import React from 'react'
import { Link } from 'react-router-dom'

function PostList(props) {
    let{allPostIs}=props
    // console.log()
  return (
    <div>
        <ul>
      {allPostIs.map((post)=>{
        return <li key={post.id}>
            <Link to={`/posts/${post.id}`}><strong>{post.title}</strong></Link>
        </li>
      })}
      </ul>
    </div>
  )
}

export default PostList
