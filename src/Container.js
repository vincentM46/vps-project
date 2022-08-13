import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import RandomRecipePage from './components/RandomRecipePage';
import SignUpPage from './components/SignUpPage';
import ErrorPage from './components/ErrorPage';

function Container() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/RandomRecipePage" element={<RandomRecipePage/>}/>
                <Route path="/SignUpPage" element={<SignUpPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}

export default Container;