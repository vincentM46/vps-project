import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import SignUpPage from './components/SignUpPage';
import ErrorPage from './components/ErrorPage';

function Container() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/SignUpPage" element={<SignUpPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}

export default Container;