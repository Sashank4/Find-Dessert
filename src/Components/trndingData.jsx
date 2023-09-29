import React from 'react'
import './trendingStyles.css'
const trending = (props) => {
  return (
    <div className='tCard'>
        <div className='tImage'>
            <img alt='Img' src={props.Img}/>
            
        </div>
        <h4>{props.heading}</h4>
            <p>{props.text}</p>
    </div>
  )
}

export default trending