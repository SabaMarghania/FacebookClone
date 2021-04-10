import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useStateValue } from './StateProvider';
import Login from './components/Login';

function App() {
  const [{ user }, dispatch] = useStateValue();

  const s = (one,two)=>{
    return one+two;
  }  
  console.log(s(5,1));
s();
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
