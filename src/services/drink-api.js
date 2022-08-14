import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/'

export async function searchDrinkByName(query) {
  if (query !== null && query.trim() !== "") {
    const response = await axios.get(url + 'search.php?s=' + query)
    return response
  }
}

export async function randomDrink() {
  const response = await axios.get(url + 'random.php')
  return response
}