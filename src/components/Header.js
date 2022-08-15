import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <div>
            <nav className="navigation">
                <NavLink className="navbar" to={"/"}>Home</NavLink>
                <NavLink className="navbar" to={"/AboutUs"}>About Our Page!</NavLink>                 
                <NavLink className="navbar" to={"/RandomDrink"}>Get a Random Drink Recipe!</NavLink>
                <NavLink className="navbar" to={"/SearchDrink"}>Search for a Drink Recipe!</NavLink>
                <NavLink className="navbar" to={"/RandomRecipePage"}>Get a random Recipe!</NavLink>
                <NavLink className="navbar" to={"/SignUpPage"}>Sign Up!</NavLink>
            </nav>
        </div>
    )
}

export default Header;

//add the navigation links for recipe/price/drink API's