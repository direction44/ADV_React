import React from 'react'

function PostList(props) {
  return (
    <div>
    <ul>
      {
      props.allLists.map((item)=>{
       return <li key={item.id}> {item.title}</li>
      })
    }
    </ul>
    </div>
  )
}

export default PostList
