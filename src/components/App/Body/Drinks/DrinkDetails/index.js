import React from 'react'
import FirebaseStorageImg from './FirebaseStorageImg.js'
import StarRating from '../../../../shared/StarRating'
import { Link } from 'react-router-dom'
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
  return <div className="drink-row">
  
    <div className="bottle-img"> 
      <Link to="drink">
      <FirebaseStorageImg
      storagePath={`images/drinks/${id}.jpg`}
      defaultUrl="/public/images/defaultDrink.png"
      />
      </Link>
    </div>
    <div className="drink-description">
    <Link to="drink">
      <h3>{name}</h3>
      <StarRating rating={starRating} />
      <p><b>Nose: </b>{nose}</p>
      <p><b>Palate: </b>{palate}</p>
      <p><b>Finish: </b>{finish}</p>
      <p><i>{description}</i></p>
    </Link>
    </div>
  </div>
}

export default DrinkDetails