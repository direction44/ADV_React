import React from 'react'
import { useParams } from 'react-router-dom'

function Post(props) {
    let{allPostIs}=props
    const{id}= useParams()
    const dataIS=allPostIs.find((list)=>(list.id===Number(id)))
console.log(dataIS)
  return (
    <div>
      <p><strong>Id: </strong>{dataIS.id}</p>
      <p><strong>Title: </strong>{dataIS.title}</p>
      <p><strong>Description: </strong>{dataIS.description}</p>
    </div>
  )
}

export default Post
