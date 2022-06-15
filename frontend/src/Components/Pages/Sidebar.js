import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Dashboard.css";
// import Courses from './Courses';

function Sidebar() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className='dashboard_sidebar'>
      <div className='dLogo'>SCTC</div>
      <div className='dList'>
        <ul className='unstyled'>
          <li><Link className='dshActive' to='/dashboard'>Dashboard</Link></li>
          <li className={isActive ? "toggleBar" : null}>
            <span className='crsActive' to='/dashboard' onClick={ToggleClass}>Courses</span>
            <ul className='unstyled child_bar'>
              <li><Link className='uplCrsActive' to='/courses'>Upload Courses</Link></li>
              <li><Link className='uptCrsActive' to='/updatecourse'>Update Courses</Link></li>
              <li><Link className='rmvCrsActive' to='/removecourse'>Remove Courses</Link></li>
            </ul>
          </li>
          <li><Link className='stdActive' to='/students'>Students</Link></li>
          <li><Link className='semActive' to='/seminars'>Seminars</Link></li>
          <li><Link className='evnActive' to='/events'>Events</Link></li>
        </ul>
      </div>
    </div >
  )
}

export default Sidebar