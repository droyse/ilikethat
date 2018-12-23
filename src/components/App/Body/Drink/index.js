import React from 'react'
import FirebaseStorageImg from '../Drinks/DrinkDetails/FirebaseStorageImg.js'
import StarRating from '../../../shared/StarRating'
import './index.css'

//THIS IS THE SINGLE DRINK 
const Drink = ({
  name = 'The Macallan 12 Year Old Sherry Oak',
  id = 'QzJosMeix8FVKNPmNVDO',
  image,
  description = 'Ed and Scott gave this to me as a wedding present',
  starRating = 4.9,
  nose = 'Crisp and sweet. There are notes of sultanas and fresh apple blossom. There is a defined floral note followed by Sherry hints. Calvados emerges with a tropical fruit note and golden syrup.',
  palate = 'Medium-body and quite firm. There are notes of hot pastries and marmalade, sultanas and peels with a developing sweetness from the barley sugar.',
  finish = 'Good length with a solid oaked note',
}) => {
    
    return (
  
  <div className="drink-column">
    <h2 className="centered-heading">{name}</h2>
      <div className="big-bottle-img"> 
      <FirebaseStorageImg
      storagePath={`images/drinks/${id}.jpg`}
      defaultUrl="/public/images/defaultDrink.png"
      />
    </div>
    <div className="detailed-drink-description">
      <StarRating rating={starRating} />
      <p><b>Nose: </b>{nose}</p>
      <p><b>Palate: </b>{palate}</p>
      <p><b>Finish: </b>{finish}</p>
      <p><i>{description}</i></p>
    </div>
  </div>
  )
}

export default Drink