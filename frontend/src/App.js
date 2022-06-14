import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader";

import Header from './Components/Layout/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import SignUp from './Components/LoginPage/SignUp';
import Login from './Components/LoginPage/Login';
import ForgetPassword from './Components/LoginPage/ForgetPassword';
import ResetPassword from './Components/LoginPage/ResetPassword';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Sans", "sans-serif"],
      },
    });
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forget' element={<ForgetPassword/>}/>
          <Route path='/reset' element={<ResetPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
