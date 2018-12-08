import React from 'react'

const DrinkDetails = ({
  name,
  image,
  description
}) => {
  return <li>
    <h3>{name}</h3>
    <img src={image} alt='bottle of drink'/>
    <p>{description}</p>
  </li>
}
export default DrinkDetails