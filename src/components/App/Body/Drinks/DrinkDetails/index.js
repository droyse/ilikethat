import React from 'react'
import FirebaseStorageImg from './FirebaseStorageImg.js'
import './index.css'
  
const DrinkDetails = ({
  name,
  id,
  image,
  description,
  starRating
}) => {
  return <div className="flex-container">
    <div>
      <FirebaseStorageImg
      storagePath={`images/drinks/${id}.jpg`}
      defaultUrl="/public/images/defaultDrink.png"
      />
    </div>
    <div>
      <h3>{name}</h3>
      <p>{starRating}</p>
      <p>{description}</p>
    </div>
  </div>
}

export default DrinkDetails

