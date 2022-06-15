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
import Dashboard from './Components/Pages/Dashboard';

import Courses from './Components/Pages/Courses';
import Allcourses from './Components/Pages/Allcourses';
import Sidebar from './Components/Pages/Sidebar';
import Students from './Components/Pages/Students';
import Seminars from './Components/Pages/Seminars';
import Events from './Components/Pages/Events';

import Courseorder from './Components/Pages/Courseorder';

import UpdateCourse from './Components/Pages/UpdateCourse';
import RemoveCourses from './Components/Pages/RemoveCourses';

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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<ForgetPassword />} />
          <Route path='/reset' element={<ResetPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create/courses' element={<Courses />} />
          <Route path='/all/course' element={<Allcourses />} />
          <Route path='/courseorder' element={<Courseorder/>} />
          
          <Route path='/sbr' element={<Sidebar />} />
          <Route path='/students' element={<Students />} />
          <Route path='/seminars' element={<Seminars />} />
          <Route path='/events' element={<Events />} />
          <Route path='/updatecourse' element={<UpdateCourse />} />
          <Route path='/removecourse' element={<RemoveCourses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
