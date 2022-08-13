// The Random component uses the API service to call the API.
// This component uses React Hooks to store the JSON data from the API call.
// The Drinks component is then used to display the results from the API call.

// React Hooks
import { useState, useEffect } from 'react';

// API Service and Drinks component are used
import { randomDrink } from '../services/drink-api';

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
      <p>{JSON.stringify(drinks)}</p>
    </div>
  )
}

export default RandomDrink