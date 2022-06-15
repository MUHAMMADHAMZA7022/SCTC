import React, { Fragment } from 'react'
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
                    This is Dashboard.
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard