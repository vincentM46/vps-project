import { useState, useEffect } from 'react';

import { randomDrink } from '../services/drink-api';
import Drinks from './Drinks';

function RandomDrink() {
  const [drinks, setDrinks] = useState([]);

  async function handleClick() {
    const response = await randomDrink()
    // console.log(response)
    setDrinks(response.data.drinks)
  }

  useEffect(() => {
    handleClick();
  }, [])

  return (
    <div>
      <h1 className="App-header">Random Drink Recipe</h1>
      <button className="recipe_buttons" onClick={handleClick}>Click for another drink</button>
      <Drinks drinks={drinks} />
    </div>
  )
}

export default RandomDrink