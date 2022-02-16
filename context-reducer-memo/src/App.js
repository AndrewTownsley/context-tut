import './App.css';
import React, { useState, useMemo } from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import { UserContext } from './UserContext';



function App() {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({user, setUser}), [user, setUser])

  return (
  <Router>
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={value}>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </UserContext.Provider>
    </>
  </Router>
  );
}

export default App;
