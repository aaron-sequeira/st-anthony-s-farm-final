import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='Wrapper'>
        <div className='Text'>
        <img className='WelcomeTo' src='images/SafLogo.jpeg' alt='' />
        <h1 className='FFF'>From <br/>Farm<br/> To Table</h1>
        <Link className='AboutUs' to="/About">
        <button>About Us</button>
        </Link>
        </div>
        <div className='FarmImgClass'>
        <img className='FarmImg' src='./images/TestFarm.jpg' width={900} height={690} alt=''/>
        </div>
    </div>
  )
}

export default Welcome