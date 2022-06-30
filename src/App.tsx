import React from 'react';
import './App.css';
import Continents from './pages/Characters';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './pages/Character';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Continents />} />
        <Route path='/character/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
