import React from 'react'
import './index.css'

const DrinkDetails = ({
  name,
  image,
  description,
  stars
}) => {
  return <div class="flex-container">
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
      {stars}
    </div>
  </div>
}
export default DrinkDetails