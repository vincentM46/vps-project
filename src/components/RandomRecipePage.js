import { useState, useEffect } from 'react';
import { SpoonAPI } from '../services/SpoonAPI';

function Random(props) {    
    const [recipe, setRecipe] = useState("");
    const [image, setImage] = useState("");
    const [steps, setSteps] = useState("");
    const [recipeURL, setRecipeURL] = useState("");
    const [food, setFood] = useState("");

    async function handleClick() {
        const spoonAPI = await SpoonAPI()
        // console.log(spoonAPI)
        const foodTitle = (spoonAPI.data.recipes[0].title)
        const foodImage = (spoonAPI.data.recipes[0].image)
        const foodSteps = (spoonAPI.data.recipes[0].instructions)
        const recipeURL = (spoonAPI.data.recipes[0].sourceUrl)
        setRecipe(foodTitle)
        setImage(foodImage)
        setSteps(foodSteps)
        setRecipeURL(recipeURL)
        setFood(spoonAPI)
        // console.log(spoonAPI.data.recipes[0].extendedIngredients[0].original)
    }
    useEffect(() => {
        handleClick();
    }, [])

    return (
        <div>
            <h1 className="App-header">Random Food Recipe</h1>
            <button className="recipe_buttons" onClick={() => handleClick()}>Click for a randomly generated recipe!</button>
            <div className="recipes__box">                
                <div className="recipe__text">     
                    <h5 className="recipes__title">{recipe}</h5>     
                    <table className="recipe-table" style={{'width': '90%', 'marginLeft': '5%' }}>
                    <thead>
                        <tr>
                            <th width="20%">Ingredients</th>
                            <th width='40%'>Directions</th>
                            <th width='30%'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td width="20%">                    
                            {food.data?.recipes[0].extendedIngredients.map((f, index) => {   console.log(food.data)
                                return (  
                               
                                    <li>{f.original}</li>
                                      
                                )
                            })}                           
                        </td>
                        <td width='50%' valign='top'>                       
                        <p className="recipes__subtitle">{steps}</p>                        
                        </td>
                        <td width='30%' valign='top'><a href={recipeURL}>
                        <img width='100' height='200' src={image} alt="recipe"/>
                    </a></td>
                    </tr>
                </tbody>
            </table>                 
                </div>
            </div>
        </div>
    )
}

export default Random;