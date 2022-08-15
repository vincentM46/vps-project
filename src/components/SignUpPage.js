import React, { useState } from 'react';

function SignUpPage() {
    const [inputValue, setInputValue] = useState("");
    const handleInputChage = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmitButton = () => {
        alert(`You have successfully signed up for our page under ${inputValue ? inputValue : '{Please enter your email address}'}! When this page becomes fully functional, be sure to come back and sign up again for real!`);
    };
    return (
        <div>
            <h3 className="App-header">Thanks for stopping by our page! Sign up here to be a part of our VPS Member's Lounge!</h3>
            <input type="text" value={inputValue} onChange={handleInputChage} placeholder="Your email here"/>
            <input className="recipe_buttons" type="submit" value="Submit" onClick={handleSubmitButton}/>
        </div>

    )
}

export default SignUpPage;