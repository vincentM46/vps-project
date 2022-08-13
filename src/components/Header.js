import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <div>
            <nav className="navigation">
                <NavLink className="navbar" to={"/"}>Home</NavLink>
                <NavLink className="navbar" to={"/AboutUs"}>About Our Page!</NavLink>
                <NavLink className="navbar" to={"/RandomRecipePage"}>Get a Recipe!</NavLink> 
                <NavLink className="navbar" to={"/"}>Search for the recipe prices!</NavLink>
                <NavLink className="navbar" to={"/"}>Get a Drink!</NavLink>
                <NavLink className="navbar" to={"/SignUpPage"}>Sign Up!</NavLink>
            </nav>
        </div>
    )
}

export default Header;

//add the navigation links for recipe/price/drink API's