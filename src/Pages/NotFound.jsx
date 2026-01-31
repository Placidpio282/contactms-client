import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
         <h1>404</h1>
         <h1> Page Not Found</h1>
         <h2>Go to <Link to="/"> Home</Link></h2>
    </div>
  )
}

export default NotFound
