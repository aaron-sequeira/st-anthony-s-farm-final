import React from 'react'
import './BodyData.css'
import { Link } from 'react-router-dom'
export const BodyData = (props) => {
  return (
    <div className='BodyDataDesign'>
        <img src={props.images} width={750} height={530} alt=''/>
        <div className='DataDesign'>
        <div className='BodyData'>  
        <h1>{props.Text}</h1>
        <h1>{props.Text2}</h1>
        <h1>{props.Text3}</h1>
        <h1>{props.Text4}</h1>
        </div>
        <h1 className='SourceD'>Sourced from a farm i know & people i trust.</h1>
        <h1 className='SellingPointD'>No Factory Farm! No Steroids! No Growth Agents!</h1>
        <Link to="Learn-More">
        <button className='ButtonD'>Learn More</button>
        </Link>
        </div>
    </div>
  )
}
