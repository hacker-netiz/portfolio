import React from 'react'
import './header.css'
import {Link} from "react-router-dom"
function Header(props) {
  return (
    <>
        <nav id = 'header'>
          <h3>SET YOUR DAILY GOALS HERE</h3>
        </nav>
        <div className='navbar'>
          <Link to = "/"> Home </Link>
          <Link to = "/about"> About </Link>
          <Link to = "/contact"> Contact </Link>
          <Link to = "/user/tempid"> user </Link>
        </div>
    </>
    
  )
}

export {Header};