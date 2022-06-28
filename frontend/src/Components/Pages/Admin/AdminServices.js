import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Sidebar from "./Sidebar";

function AdminServices() {
    return (
        <Fragment>
            <div className="dashboard_holder students">
                <div className="dSidebar">
                    <Sidebar />
                </div>
                <div className="dashboard_content">
                    <h1>All Services</h1>
                    <div className="courses_holder">
                        <div className="course_card"   >
                            <div className="cr_img">
                                <img src={"#"} alt="service_image" />
                            </div>
                            <div className="crs_content">
                                <div className="crs_title">
                                    <h2 >Service Title</h2>
                                </div>
                                <div className="crs_desp">
                                    <p >Service Description </p>
                                </div>
                                <div className="crs_action">
                                    <Button className="btn_primary">
                                        Delete
                                    </Button>
                                    <Link className="btn_primary" to={"#"}>
                                        Update
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminServices