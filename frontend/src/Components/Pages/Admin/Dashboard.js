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
                            <div className='lnk_boxDsh'>
                                <Link to={"/courses"}>See all courses</Link>
                            </div>
                        </div>
                        <div className='dasCard'>
                            <h3>Total No of Workshops</h3>
                            <span>174</span>
                            <div className='lnk_boxDsh'>
                                <Link to={"/events"}>See all Workshops</Link>
                            </div>
                        </div>
                        <div className='dasCard'>
                            <h3>Total No of Services</h3>
                            <span>174</span>
                            <div className='lnk_boxDsh'>
                                <Link to={"/services"}>See all Services</Link>
                            </div>
                        </div>
                        <div className='dasCard'>
                            <h3>Total No of Users</h3>
                            <span>174</span>
                            <div className='lnk_boxDsh'>
                                <Link to={"/students"}>See all Users</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
