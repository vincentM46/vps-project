import axios from 'axios';

export async function SpoonAPI() {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=2f686169d2f646ccbca2eb06615c6be3`)

    return response
}