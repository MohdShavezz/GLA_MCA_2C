import React from 'react'
import Parent from './Parent'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Company from './Company';
import User from './User';

const App = () => {
  return (
    <div>
      {/* <Parent/> */}
      <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/parent">Parent</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
           <Route path="user" element={<User />} /> 
           <Route path="user/:userId" element={<User />} /> 
           <Route path="company" element={<Company />} /> 
        </Route>
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
