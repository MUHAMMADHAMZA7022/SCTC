import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import store from "./redux/store";
import { useDispatch, useSelector } from 'react-redux';
import WebFont from "webfontloader";
// import { loadUser } from "./redux/action/useraction";
import Header from './Components/Layout/Header/Header';
import Home from './Components/Home/Home';
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
import CourseHistory from './Components/Users/CourseHistory';

import UpdateCourse from './Components/Pages/Admin/UpdateCourse';
import RemoveCourses from './Components/Pages/Admin/RemoveCourses';

import RemoveEvent from './Components/Pages/Admin/RemoveEvent';
import UpdateEvent from './Components/Pages/Admin/UpdateEvent';

import Updatepasword from './Components/Users/updatepassword';
import ProtectedRoute from './Components/Route/ProtectedRoute';
import { history } from './history';
import { loadUser } from './redux/action/useraction';
function App() {
<<<<<<< HEAD
  const { isAuthenticated } = useSelector((state) => state.user);
=======
const dispatch=useDispatch();

const {  isAuthenticated } = useSelector((state) => state.user);
>>>>>>> f39ea192704d91f81e12b5d6866e4ccedcdcc24e
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Sans", "sans-serif"],
      },
    });
<<<<<<< HEAD
    store.dispatch(loadUser());
  }, []);
=======
   
     dispatch(loadUser());

   

  }, [dispatch]);
>>>>>>> f39ea192704d91f81e12b5d6866e4ccedcdcc24e

  return (
    <div>
      <Router history={history}>
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
          <Route path='/courseorder' element={<Courseorder />} />
          <Route path='/updatecourse' element={<UpdateCourse />} />
          <Route path='/removecourse' element={<RemoveCourses />} />
          <Route path='/coursehistory' element={<CourseHistory />} />
          <Route path='/profile' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>} />

          <Route path='/all/events' element={<Events />} />
          <Route path='/create/event' element={<CreateEvent />} />
          <Route path='/removeevent' element={<RemoveEvent />} />
          <Route path='/updateevent' element={<UpdateEvent />} />

          <Route path='/password/update' element={< Updatepasword />} />

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
