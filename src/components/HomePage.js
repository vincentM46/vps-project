import cocktail1 from '../images/cocktail1.png';
import cocktail2 from '../images/cocktail2.png';
import dinner1 from '../images/dinner1.png';
import dinner2 from '../images/dinner2.png';
import dinner3 from '../images/dinner3.png';
import dinner4 from '../images/dinner4.png';

function HomePage() {
    return (
        <div>
            <h1 className="App-header">Welcome to the VPS Bar!</h1>
            <p>The goal of this project is to deliver a convenient method of gathering various meal ideas in one place! Being mindful of social distancing and instead of going bar-hopping, through the usage of various APIs, this project created in React will allow any user to generate a random recipe and a random drink to pair the recipe with of all the ingredients required. Bring the VPS Bar to your home!</p>
            <div className="images">
            <img className="image1" src={cocktail1}/>
            <img className="image2" src={cocktail2}/>
            <img className="dinner1" src={dinner1}/>
            <img className="dinner2" src={dinner2}/>
            <img className='dinner3' src={dinner3}/>
            <img className='dinner4' src={dinner4}/>
            </div>
        </div>
    )
}

export default HomePage;