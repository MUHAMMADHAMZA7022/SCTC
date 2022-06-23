import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import WebFont from "webfontloader";
// import { loadUser } from "./redux/action/useraction";

import Header from "./Components/Layout/Header/Header";
// import Footer from "./Components/Layout/Footer/Footer";


import Home from "./Components/Layout/Home/Home";
import Course from "./Components/Layout/Course/CourseCard"
import About from "./Components/Layout/About/About";
import SignUp from "./Components/Pages/Users/SignUp";
import Profile from "./Components/Pages/Users/Profile";
import Login from "./Components/Pages/Users/Login";
import ForgetPassword from "./Components/Pages/Users/ForgetPassword";
import ResetPassword from "./Components/Pages/Users/ResetPassword";
import Dashboard from "./Components/Pages/Admin/Dashboard";

import Courses from "./Components/Pages/Admin/Courses";
import Courseorder from "./Components/Pages/Admin/Courseorder";
import CourseDetails from "./Components/Layout/Course/CourseDetails";
import HomeCourses from "./Components/Layout/Course/HomeCourses";

import Sidebar from "./Components/Pages/Admin/Sidebar";
import Students from "./Components/Pages/Admin/Students";
import Seminars from "./Components/Pages/Admin/Seminars";

import AdminEvents from "./Components/Pages/Admin/AdminEvent";
import CreateEvent from "./Components/Pages/Admin/CreateEvent";
import UpdateEvent from "./Components/Pages/Admin/UpdateEvent";
import EventDetails from "./Components/Pages/Event/EventDetails";


import UpdateCourse from "./Components/Pages/Admin/UpdateCourse";
import Updatepasword from "./Components/Pages/Users/updatepassword";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import { loadUser } from "./redux/action/useraction";
import AdminCourses from "./Components/Pages/Admin/AdminCourses";
import Loader from "./Components/Layout/Loader/loader";
import Loader1 from "./Components/Layout/Loader/Courseloader";

import Cart from "./Components/Pages/Admin/Cart";


function App() {
  const dispatch = useDispatch();

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/courses" element={<HomeCourses />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/loaderr" element={<Loader1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/courseorder" element={<Courseorder />} />
          <Route path="/sbr" element={<Sidebar />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/course/details/:id" element={<CourseDetails />} />
          <Route path="/event/details/:id" element={<EventDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* ADMIN ROUTES */}

          {/* dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* courses routes  admin*/}
          <Route
            path="/create/courses"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/all/course"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                <AdminCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updatecourse/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                {isAuthenticated ? <UpdateCourse /> : <Login />}
              </ProtectedRoute>
            }
          />

          {/* //students ROues Admin */}
          <Route
            path="/students"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                <Students />
              </ProtectedRoute>
            }
          />
          {/* evnet routes admin */}

          <Route
            path="/all/events"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                <AdminEvents />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create/event"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                <CreateEvent />
              </ProtectedRoute>
            }
          />

          <Route
            path="/updateevent/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              >
                {isAuthenticated ? <UpdateEvent /> : <Login />}
              </ProtectedRoute>
            }
          />
          {/* 2 problem dashboard show user slow or page show hoty or allcourses py 2 bar alert a rha error 2 bar ha os mein or updaturl py b rola ha course or event or dashboard bs ye seii krny admin routes slow ha bs */}

          {/* ADmin Routes Endddddddddddddddddddddddd */}

          {/* NORMAL ROUTES */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                {isAuthenticated ? <Profile /> : <Login />}
              </ProtectedRoute>
            }
          />
          <Route
            path="/password/update"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Updatepasword />
              </ProtectedRoute>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
