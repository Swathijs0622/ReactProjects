import React from 'react';
import "./styles.css";
import Login from './Login';

const isLoggedIn = false;

export default function App(){
  return (
    <div className='App'>
      {isLoggedIn ? <h1 className='demotext'>Login Form</h1> : <Login />}
    </div>
  )
}