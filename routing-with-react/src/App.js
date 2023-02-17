import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
    <Link to="/">About</Link>
    <Link to="/contact"> Contact </Link>
    <Routes>
      <Route exact path='/' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </div>
  );
}

export default App;
