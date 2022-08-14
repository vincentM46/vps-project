import { useState } from 'react';

import { searchDrinkByName } from '../services/drink-api';
import Drinks from './Drinks';

function SearchDrink() {
    const [drinks, setDrinks] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    async function handleClick() {
        const response = await searchDrinkByName(searchTitle)
        if (response.data.drinks != null) {
            try {
                setDrinks(response.data.drinks)
            }
            catch (error) {
                setDrinks([])
                console.log('Error')
            }
        }
    }
    
    return (
        <div>
            <h1 className="App-header">Search for Drink Recipes</h1>
            <input type="text" placeholder="Cheers!" name="search" onChange={e => setSearchTitle(e.target.value)} />
            <button className="recipe_buttons" onClick={handleClick}>Search</button>
            <Drinks drinks={drinks} />
        </div>
    )
}

export default SearchDrink; 