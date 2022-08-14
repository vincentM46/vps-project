import { useState, useEffect } from 'react';

import { randomDrink } from '../services/drink-api';
import Drinks from './Drinks';

function RandomDrink() {
  const [drinks, setDrinks] = useState([]);

  async function handleClick() {
    const response = await randomDrink()
    console.log(response)
    setDrinks(response.data.drinks)
  }

  useEffect(() => {
    handleClick();
  }, [])

  return (
    <div>
      <h1>Random Drink Recipe</h1>
      <button onClick={handleClick}>Click for another drink</button>
      <Drinks drinks={drinks} />
    </div>
  )
}

export default RandomDrink