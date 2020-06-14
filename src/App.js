import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './COMPONENTS/HEADER/Header'
import Artisthome from './COMPONENTS/ARTIST/Artisthome';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="artistCollection">
        <Artisthome />
        <Artisthome />
        <Artisthome />
        <Artisthome />
        <Artisthome />
        <Artisthome />
      </div>
    </div>
  );
}

export default App;
