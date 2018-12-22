import React from 'react'
import FirebaseStorageImg from './FirebaseStorageImg.js'
import StarRating from '../../../StarRating'
import './index.css'
  
const DrinkDetails = ({
  name,
  id,
  image,
  description,
  starRating,
  nose,
  palate,
  finish
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
      <p><StarRating rating={starRating} /></p>
      <p><b>Nose: </b>{nose}</p>
      <p><b>Palate: </b>{palate}</p>
      <p><b>Finish: </b>{finish}</p>
      <p><i>{description}</i></p>
    </div>
  </div>
}

export default DrinkDetails

