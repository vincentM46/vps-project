import githubmark from '../images/GitHub-Mark-64.png'

function AboutUs() {
    return (
        <div id="home">
            <h1 className="App-header">Welcome to the VPS Project!</h1>
            
            <br></br><br></br>
            <h1>Welcome to My&#123;Dev&#125;Page!</h1>
            <p>The ability to generate recipes for various drinks was brought to you by TheCocktailDB API. This api is an open, crowd-sourced database of drinks and cocktails from various parts of the world, with a total of 635 drinks, and 489 ingredients.</p>
            <p>The ability to generate recipes for various meals was brogught to you by the Spoonacular API. The Spoonacular API contains over 5000 recipes, with more than 2600 ingredients across the board.</p>
            <h2>Brought to you by the VPS (actual footage):</h2>
            <iframe src="https://c.tenor.com/7W_a28lhqQcAAAAC/bugcat-bugcatsticker.gif" width="480" height="360" frameBorder="0" title="meme"></iframe>
            <h2>Take a peek at our GitHub profiles:</h2>
            <br></br>   
            <div className="github-links" id="github-links">
                
                <a href="https://github.com/vincentM46" target="_blank">      
                <img src={githubmark} alt='VM GitHub Mark' id='VM-github-mark'/>
                <p>VM</p>
                </a>
                <a href="https://github.com/padangy" target="_blank">            
                <img src={githubmark} alt='PD GitHub Mark' id='PD-github-mark'/> 
                <p>PD</p>
                </a>
                <a href="https://github.com/sabrinar777" target="_blank"><img src={githubmark} alt='SR GitHub Mark' id='SR-github-mark'/>
                <p>SR</p>
                </a>               
            </div>  
            <br></br><br></br>
        </div>
    )
}

export default AboutUs;