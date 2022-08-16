import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './Container';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
