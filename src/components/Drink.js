import React from 'react';

function Drink(props) {
    let aDrink = props.value
    return (
        <div className="recipes__box" key={props.index}>
            <div className="recipe__text">
            <h2 className="recipes__title">{aDrink.strDrink}</h2>
            <p className="recipes__subtitle">
            <h4>Type: {aDrink.strCategory}, Glass: {aDrink.strGlass}</h4>
            <table style={{ 'width': '80%', 'margin-left': '10%' }}>
                <thead>
                    <tr>
                        <th width="20%">Ingredients</th>
                        <th width='50%'>Directions</th>
                        <th width='30%'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="20%">
                            {aDrink.strMeasure1}&nbsp;{aDrink.strIngredient1}<br />
                            {aDrink.strMeasure2}&nbsp;{aDrink.strIngredient2}<br />
                            {aDrink.strMeasure3}&nbsp;{aDrink.strIngredient3}<br />
                            {aDrink.strMeasure4}&nbsp;{aDrink.strIngredient4}<br />
                            {aDrink.strMeasure5}&nbsp;{aDrink.strIngredient5}<br />
                            {aDrink.strMeasure6}&nbsp;{aDrink.strIngredient6}<br />
                            {aDrink.strMeasure7}&nbsp;{aDrink.strIngredient7}<br />
                            {aDrink.strMeasure8}&nbsp;{aDrink.strIngredient8}<br />
                            {aDrink.strMeasure9}&nbsp;{aDrink.strIngredient9}<br />
                            {aDrink.strMeasure10}&nbsp;{aDrink.strIngredient10}<br />
                            {aDrink.strMeasure11}&nbsp;{aDrink.strIngredient11}<br />
                            {aDrink.strMeasure12}&nbsp;{aDrink.strIngredient12}<br />
                            {aDrink.strMeasure13}&nbsp;{aDrink.strIngredient13}<br />
                            {aDrink.strMeasure14}&nbsp;{aDrink.strIngredient14}<br />
                            {aDrink.strMeasure15}&nbsp;{aDrink.strIngredient15}<br />
                        </td>
                        <td width='50%' valign='top'>{aDrink.strInstructions}</td>
                        <td width='30%' valign='top'><img alt={aDrink.strDrink} src={aDrink.strDrinkThumb} width='220' height='200' /></td>
                    </tr>
                </tbody>
            </table>
            </p>
            </div>
        </div>
    )
}

export default Drink;