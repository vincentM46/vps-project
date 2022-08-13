// This is the API service. The AXIOS API library is
// used to make API calls.

import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/'

export async function randomDrink() {
  console.log('random: ')
  const response = await axios.get(url + 'random.php')
  console.log(response)
  return response
}