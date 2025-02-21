import React from 'react'
import { Outlet } from 'react-router-dom'

function Posts() {
  return (
    <div>
      <h1>The Tech Blog</h1>
      <Outlet/>
    </div>
  )
}

export default Posts
