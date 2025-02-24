import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected(props) {
    const {isLogIn,children}=props
    if(isLogIn){
        return children
    }
    return <Navigate to="/" replace/>
}

export default Protected
