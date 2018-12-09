import React from 'react'
import firebase from 'firebase/app'
import { collectionData } from 'rxfire/firestore'

import DrinkDetails from './DrinkDetails'

const Loading = () => <div>Loading drinks...</div>

export default class Drinks extends React.Component {
  state = {}

  constructor() {
    super()
    const drinksRef = firebase.firestore().collection('drinks')

    this.drinksSubscription = collectionData(drinksRef, 'id')
      .subscribe(drinks => this.setState({drinks}))
  }

  componentWillUnmount() {
    this.drinksSubscription.unsubscribe()
  }

  render() {
    const {drinks} = this.state

    return <div>
      <h1>Hello, I'm all the drinks</h1>
      {drinks
        ? drinks.map(drink => <DrinkDetails
          key={drink.id}
          {...drink}
          />)
        : <Loading/>
      }
    </div>
  }
}
