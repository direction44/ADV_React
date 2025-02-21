import React from 'react'
import { Outlet } from 'react-router-dom'
function Posts() {
  return (
    <div>
      <h2>The tech blog</h2>
      <Outlet/>
    </div>
  )
}

export default Posts
