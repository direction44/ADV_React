import React from 'react'
import { Routes ,Route,Link} from 'react-router-dom'
import Users from './components/Users'
import Home from './components/Home'
import User from './components/User'

function App() {
  const allUsers = [
    { id: 1, name: "Alice", gender: "Female", city: "New York" },
    { id: 2, name: "Bob", gender: "Male", city: "Los Angeles" },
    { id: 3, name: "Charlie", gender: "Male", city: "Chicago" },
    { id: 4, name: "Diana", gender: "Female", city: "Houston" },
    { id: 5, name: "Ethan", gender: "Male", city: "Miami" }
  ];
  
  
  return (
    <div>
    <nav>
      <Link to='/' style={{margin:"10px"}}>Home</Link>
      <Link to='/users' style={{margin:"10px"}}>User</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users allUsersIs={allUsers}/>}>
            <Route path=':userid' element={<User allUsersIs={allUsers}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
