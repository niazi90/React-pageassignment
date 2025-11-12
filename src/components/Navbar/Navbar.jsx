import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='parentnavbar'>
        <div className='plogo'> <p className='logo'>Fintech</p>
        <div className='pcircle'></div>
        </div>
   
      <div className='childnavbar'>
        <ul>
            <li>Platform</li>
            <li>company</li>
            <li>Industries</li>
            <li>Resources</li>
        </ul>
      </div>
      <div className='buttonss'>
           <button className='signinbtn'>Sign IN</button>
            <button className='signupbtn'>Sign UP</button>
      </div>
        
    </div>
  )
}

export default Navbar
