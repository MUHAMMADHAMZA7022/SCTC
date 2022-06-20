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
import AdminCourses from './Components/Pages/Admin/AdminCourses';
import Loader from './Components/Layout/Loader/loader';


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
          <Route path='/loader' element={<Loader />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />         
          <Route path='/forget' element={<ForgetPassword />} />
          <Route path='/reset/:token' element={<ResetPassword />} />
          <Route path='/courseorder' element={<Courseorder/>} />
          <Route path='/removecourse' element={<RemoveCourses />} />    
          <Route path='/all/events' element={<Events />} />
          <Route path='/create/event' element={<CreateEvent />} />
          <Route path='/sbr' element={<Sidebar />} />
          <Route path='/students' element={<Students />} />
          <Route path='/seminars' element={<Seminars />} />
        {/* ADMIN ROUTES */}
          <Route path='/dashboard' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user && user.role==="admin"?(true):(false)}>
              <Dashboard />
            </ProtectedRoute>} />
            <Route path='/create/courses' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user &&user.role==="admin"?true:false}>
              <Courses />
            </ProtectedRoute>} />
            <Route path='/all/course' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user &&user.role==="admin"?true:false}>
             <AdminCourses />
            </ProtectedRoute>} />
            <Route path='/updatecourse/:id' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user &&user.role==="admin"?true:false}>
             <UpdateCourse/>
            </ProtectedRoute>} />
        
        {/* NORMAL ROUTES */}
          <Route path='/profile' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            {  isAuthenticated?( <Profile />):(<Login />)}
            </ProtectedRoute>} />
          <Route path='/password/update' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            < Updatepasword  />
            </ProtectedRoute>} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
