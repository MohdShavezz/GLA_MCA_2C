import React from 'react'
import './Header.css'

const myCss={width:'100%',backgroundColor:'red'}

const Header = () => {
  return (
    <nav 
    // style={myCss}
    >
        <div className="left">LOOGO</div>
        <div className="right">
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
        </div>
    </nav>
  )
}

export default Header
