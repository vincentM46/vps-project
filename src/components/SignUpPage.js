import React, { useState } from 'react';

function SignUpPage() {
    const [inputValue, setInputValue] = useState("");
    const handleInputChage = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmitButton = () => {
        alert(`You have successfully signed up for our page under ${inputValue}! When this page becomes fully functional, be sure to come back and sign up again for real!`);
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChage} placeholder="Your email here"/>
            <input type="submit" value="submit" onClick={handleSubmitButton}/>
        </div>

    )
}

export default SignUpPage;