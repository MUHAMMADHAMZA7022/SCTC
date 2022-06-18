import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import store from "./redux/store";
import { useDispatch, useSelector } from 'react-redux';
import WebFont from "webfontloader";
// import { loadUser } from "./redux/action/useraction";
import Header from './Components/Layout/Header/Header';
import Home from './Components/Layout/Home/Home';
import About from './Components/Pages/About';
import SignUp from './Components/Users/SignUp';
import Profile from './Components/Users/Profile';
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
import Updatepasword from './Components/Users/updatepassword';
import ProtectedRoute from './Components/Route/ProtectedRoute';
import { loadUser } from './redux/action/useraction';


function App() {
const dispatch=useDispatch();

const { user, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Sans", "sans-serif"],
      },
    });
   
     dispatch(loadUser());

   

  }, [dispatch]);
  return (
    <div>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />         
          <Route path='/forget' element={<ForgetPassword />} />
<<<<<<< HEAD
          <Route path='/reset/:token' element={<ResetPassword />} />
=======
          <Route path='/reset' element={<ResetPassword />} />
<<<<<<< HEAD
          <Route path='/dashboard' element={<Dashboard />} />

          
          <Route path='/create/courses' element={<Courses />} />
          <Route path='/all/course' element={<Allcourses />} />
          <Route path='/courseorder' element={<Courseorder />} />
=======
>>>>>>> 8f6a0b2c1811ae3bb16213481cea82e8a8135f07
        
          <Route path='/dashboard' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user &&user.role==="admin"?true:false}>
              <Dashboard />
            </ProtectedRoute>} />
            <Route path='/create/courses' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user &&user.role==="admin"?true:false}>
              <Courses />
            </ProtectedRoute>} />
            <Route path='/all/course' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user &&user.role==="admin"?true:false}>
             <Allcourses />
            </ProtectedRoute>} />
          <Route path='/courseorder' element={<Courseorder/>} />
>>>>>>> 60a282953f955b9b5031fe773c8586daf967b243
          <Route path='/updatecourse' element={<UpdateCourse />} />
          <Route path='/removecourse' element={<RemoveCourses />} />
       
          
          <Route path='/all/events' element={<Events />} />
          <Route path='/create/event' element={<CreateEvent />} />
          <Route path='/profile' element={
<<<<<<< HEAD
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>} />

          <Route path='/all/events' element={<Events />} />
          <Route path='/create/event' element={<CreateEvent />} />
          <Route path='/removeevent' element={<RemoveEvent />} />
          <Route path='/updateevent' element={<UpdateEvent />} />

          <Route path='/password/update' element={< Updatepasword />} />

=======
          <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>} />
          <Route path='/password/update' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            < Updatepasword  />
            </ProtectedRoute>} />
          
>>>>>>> 60a282953f955b9b5031fe773c8586daf967b243
          <Route path='/sbr' element={<Sidebar />} />
          <Route path='/students' element={<Students />} />
          <Route path='/seminars' element={<Seminars />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
