import "./Dashboard.css";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

import React, { Fragment,  } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {
//   CLEAR_ERROR,
//   getAdminProduct,
//   deleteProduct,
} from "../../../redux/action/courseaction";
// import { useAlert } from "react-alert";
// import Loader from "../Layout/Loader/Loader";
// import { DELETE_PRODUCT_RESET } from "../../../redux/Constant/courseconstant";
function AllCourses() {
    // const alert = useAlert();

    // const columns = [
    //     { field: 'col1', headerName: 'Title', width: 150 },
    //     { field: 'col2', headerName: 'Price', width: 150 },
    //     { field: 'col3', headerName: 'Instrutor', width: 150 },
    //     { field: 'col4', headerName: 'Category', width: 150 }
    // ];

    // const rows = [
    //     { id: 1, col1: 'Bio', col2: '380$', col3: 'Prof.Asif Hanif', col4: 'BioStat' },
    //     { id: 2, col1: 'Physics', col2: '340$', col3: 'Prof.Asif Hanif', col4: 'BioChemistry' },
    //     { id: 3, col1: 'Maths', col2: '320$', col3: 'Prof.Asif Hanif', col4: 'Organic' }
    // ];


    return (
        <Fragment>
            <div className='dashboard_holder students'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    <h1>All Courses</h1>
                    {/* Courses in list table style */}
                    {/* <div style={{ height: 300, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            disableSelectionOnClick
                            autoHeight
                        />
                    </div> */}
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

export default AllCourses