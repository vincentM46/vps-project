import React from 'react';
import Drink from './Drink';

function Drinks(props) {
    if (props.drinks.length > 0) {
        return (
            <div>
                {
                    props.drinks.map((drink, index) => {
                        return (
                            <Drink key={index} value={drink} />
                        )
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div>
            </div>
        )
    }
}

export default Drinks;