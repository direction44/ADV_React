import React from 'react'
import About from './components/About'
import Home from './components/Home'
import PostList from './components/PostList'
import Posts from './components/Posts'
import { Routes,Route,Link } from 'react-router-dom'
import Post from './components/Post'

function App() {
  const allPost = [
    { id: 101, title: "React", description: "A JavaScript library for building user interfaces." },
    { id: 102, title: "Router", description: "Directs network traffic and connects devices to the internet." },
    { id: 103, title: "Redux", description: "A state management library for JavaScript apps, commonly used with React." }
  ];
  
  return (
    <div>
      <nav>
        <Link to="/" style={{margin:"10px"}}>Home</Link>
        <Link to="/about" style={{margin:"10px"}}>About</Link>
        <Link to="/posts" style={{margin:"10px"}}>Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>  
        <Route path="/posts" element={<Posts/>}>
          <Route index element={<PostList allPostIs={allPost}/>}/>  
          <Route path=":id" element={<Post allPostIs={allPost}/>}/>  
        </Route>  
      </Routes>      
    </div>
  )
}

export default App
