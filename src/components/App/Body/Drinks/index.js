import React from 'react'
import DrinkDetails from './DrinkDetails'

const drinks = [
  {
    id: 1,
    name: 'whisky',
    description: 'a delicious whisky',
    image: 'images/talisker-25.jpg'
  },
  {
    id: 2,
    name: 'scotch',
    description: 'a delicious scotch',
  },
  {
    id: 3,
    name: 'gin',
    description: 'a delicious gin',
  },
  {
    id: 4,
    name: 'beer',
    description: 'a delicious beer',
  },
  {
    id: 5,
    name: 'juice',
    description: 'a delicious juice',
  },
]

const Drinks = () => <div>
  <h1>Hello, I'm all the drinks</h1>
  {drinks.map(drink => <DrinkDetails
    key={drink.id}
    {...drink}
  />)}
</div>

export default Drinks