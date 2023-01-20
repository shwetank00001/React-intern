import React from 'react'
import logo from './fcc.png'
import './Styles/Nav.css'

const Nav = () => {
  return (

    <div className='nav'>
        <div>
          <input type='text' placeholder='Search for 9,000+ tutorials' className='nav-search'></input>
        </div>

        <div className='nav-img'>
          <img src={logo} alt='freecodecamplogo'/>
        </div>

        <div className='nav-button'>
              <button className='nav-menu'>Menu</button>
              <button className='nav-signin'>Sign In</button>
        </div>     
    </div>
  )
}

export default Nav