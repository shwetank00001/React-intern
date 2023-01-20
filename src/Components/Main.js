import React from 'react'
import logo1 from './main.png'
import './Styles/Main.css'
const Main = () => {
  return (

    <section>
      <div className='main'>

      <div className='div-main'>
          <div className='div-text'>
            <h1>Learn to code — for free.</h1>
            <h1>Build projects.</h1>
            <h1>Earn certifications.</h1>
            <h4>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</h4>
            <p>Google Amazon Spotify  Microsoft</p>
          </div>
          <div className='div-button'>
            <button className='button'>Get Started (it's free)</button>
          </div>

          <div>
            <img src={logo1} alt='test' className='div-img'></img>
          </div>
          <span class="caption">freeCodeCamp students at a local study group in South Korea.</span>
      </div>  
    </div>
  </section>
  )
}

export default Main