import React from 'react'
import './index.css'

const DrinkDetails = ({
  name,
  image,
  description,
  starRating
}) => {
  return <div className="flex-container">
    <div>
      <img src={image} alt='bottle of drink'/>
    </div>
    <div>
      {name}
    </div>
    <div>
      {description}
    </div>
    <div>
      {starRating}
    </div>
  </div>
}
export default DrinkDetails