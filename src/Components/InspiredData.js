import React from 'react'
import './InspiredStyles.css'
const InspiredData = (props) => {
  return (
    <div className="card">
      <img src={props.Img} alt="Card" className="card-image" />
      <div className="card-content">
        <h3 className="card-heading">{props.Category}</h3>
      </div>
    </div>
  )
}

export default InspiredData