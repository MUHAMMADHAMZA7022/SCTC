import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Layout/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
