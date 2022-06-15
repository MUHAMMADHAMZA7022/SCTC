import React from 'react'
import {Link} from 'react-router-dom';
import "./Dashboard.css";
// import Courses from './Courses';

function Sidebar() {
  return (
    <div className='dashboard_sidebar'>
      <div className='dLogo'>SCTC</div>
      <div className='dList'>
        <ul className='unstyled'>
          <li><Link className='dshActive' to='/dashboard'>Dashboard</Link></li>
          <li><Link className='crsActive' to='/courses'>Courses</Link></li>
          <li><Link className='stdActive' to='/students'>Students</Link></li>
          <li><Link className='semActive' to='/seminars'>Seminars</Link></li>
          <li><Link className='evnActive' to='/events'>Events</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar