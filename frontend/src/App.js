import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader";

import Header from './Components/Layout/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import SignUp from './Components/Users/SignUp';
import Login from './Components/Users/Login';
import ForgetPassword from './Components/Users/ForgetPassword';
import ResetPassword from './Components/Users/ResetPassword';
import Dashboard from './Components/Pages/Admin/Dashboard';

import Courses from './Components/Pages/Admin/Courses';
import Allcourses from './Components/Pages/Admin/Allcourses';
import Sidebar from './Components/Pages/Admin/Sidebar';
import Students from './Components/Pages/Admin/Students';
import Seminars from './Components/Pages/Admin/Seminars';

import Events from './Components/Pages/Admin/Events';
import CreateEvent from './Components/Pages/Admin/CreateEvent';

import Courseorder from './Components/Pages/Admin/Courseorder';

import UpdateCourse from './Components/Pages/Admin/UpdateCourse';
import RemoveCourses from './Components/Pages/Admin/RemoveCourses';

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
          <Route path='/updatecourse' element={<UpdateCourse />} />
          <Route path='/removecourse' element={<RemoveCourses />} />
          
          <Route path='/all/events' element={<Events />} />
          <Route path='/create/event' element={<CreateEvent />} />
          
          <Route path='/sbr' element={<Sidebar />} />
          <Route path='/students' element={<Students />} />
          <Route path='/seminars' element={<Seminars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
