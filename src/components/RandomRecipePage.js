import { useState, useEffect } from 'react';
import { SpoonAPI } from '../services/SpoonAPI';

function Random(props) {
    const [recipe, setRecipe] = useState("");
    const [image, setImage] = useState("");
    const [steps, setSteps] = useState("");
    const [recipeURL, setRecipeURL] = useState("");

    async function handleClick() {
        const food = await SpoonAPI()
        console.log(food)
        const foodTitle = (food.data.recipes[0].title)
        const foodImage = (food.data.recipes[0].image)
        const foodSteps = (food.data.recipes[0].instructions)
        const recipeURL = (food.data.recipes[0].sourceUrl)
        setRecipe(foodTitle)
        setImage(foodImage)
        setSteps(foodSteps)
        setRecipeURL(recipeURL)
    }
    useEffect(() => {
        handleClick();
    }, [])

    return (
        <div>
            <h1>Get a randomly generated recipe!</h1>
            <button onClick={() => handleClick()}>Click for a randomly generated recipe!</button>
            <p>{recipe}</p>
            <a href={recipeURL}>
                <img src={image} alt="recipe"/>
            </a>
            <p>{steps}</p>
        </div>
    )
}

export default Random;