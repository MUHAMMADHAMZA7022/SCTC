import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';

function Events() {
    return (
        <Fragment>
            <div className='dashboard_holder events'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content courses_content'>
                    <h1>All Events</h1>
                    <div className="courses_holder">
                        <div className="course_card">
                            <div className="cr_img"></div>
                            <div className="crs_content">
                                <div className="crs_title">
                                    <h2>Learn Biostatical Programming Masterclass</h2>
                                </div>
                                <div className="crs_desp">
                                    <p>Lorem Ipsum dolor sit amet dolor sit Ipsum dit amet </p>
                                </div>
                                <div className="crs_action">
                                    <Link className='btn_primary' to={'#'}>Delete</Link>
                                    <Link className='btn_primary' to={'#'}>Update</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Events