import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import Sidebar from './Sidebar';

function Dashboard() {
    return (
        <Fragment>
            <div className='dashboard_holder dashboard'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    <div className='dashboardContent_holder'>
                        <div className='dasCard'>
                            <h3>Total No of Courses</h3>
                            <span>174</span>
                            <Link to={"courses"}>See all courses</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
