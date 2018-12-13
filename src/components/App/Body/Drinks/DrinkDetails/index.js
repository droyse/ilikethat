import React from 'react'
import firebase from 'firebase/app'
import './index.css'
  
  var storage = firebase.storage();
  var pathReference = storage.ref();
  pathReference.child('images/drinks/gNlKm6IHuko9kE5Zk6FM.jpg').getDownloadURL().then(function(url)
  {
    // console.log(url);
     var img = document.getElementById('bottle_img');
     img.src = url;
  }).catch(function(error) {
  });

const DrinkDetails = ({
  name,
  id,
  image,
  description,
  starRating
}) => {
  return <div className="flex-container">
    <div>
      <img id="bottle_img" alt='pic of bottle'/>
    </div>
    <div>
      <h3>{name}</h3>
      <p>{starRating}</p>
      <p>{description}</p>
    </div>
  </div>
}

export default DrinkDetails

//src={str1.concat(id.toString({id}), str3)}