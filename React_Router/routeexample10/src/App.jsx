import React from 'react'
import About from './components/About'
import Home from './components/Home'
import PostList from './components/PostList'
import Posts from './components/Posts'
import { Routes,Route,NavLink } from 'react-router-dom'

function App() {
  const allPost=[{id:101,title:"React",discription:"It's a JS Library"},{id:102,title:"Router",discription:"A router is a device that connects networks and sends data between them. It can also connect devices to the internet."},{id:103,title:"Redux",discription:"Redux is a JavaScript library that manages an application's state. It's often used with React and React Native."}]
  return (
    <div>
      <nav>
        <NavLink to="/" style={{margin:"10px"}}>Home</NavLink>
        <NavLink to="/about" style={{margin:"10px"}}>About</NavLink>
        <NavLink to="/posts" style={{margin:"10px"}}>Posts</NavLink>
      </nav>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/posts'element={<Posts/>}>
            <Route index element={<PostList allLists={allPost}/>}>
            </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
