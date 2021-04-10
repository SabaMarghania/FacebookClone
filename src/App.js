import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useStateValue } from './StateProvider';
import Login from './components/Login';

function App() {
  const [{ user }, dispatch] = useStateValue();

 
  return (
     <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">

          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            </div>

          </div>
      )}
    </>
   
  );
}
export default App;
