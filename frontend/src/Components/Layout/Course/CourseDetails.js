import React, { Fragment } from 'react'

import bg3 from '../../../images/slide-img-3.jpg';
import bg1 from '../../../images/slide-img-1.jpg';
import {Link} from 'react-router-dom';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import './CourseDetails.css';

function CourseDetails() {
    return (
        <Fragment>
            <div className='courseDetails'>
                {/* Single Page Banner */}
                <div className='crs_banner'>
                    <div className='crs_bannerImg'>
                        <img src={bg3} alt="banner" />
                    </div>
                        <div className="crsBanner_content">
                            <h2>Course Detailed</h2>
                        </div>
                </div>
                {/* Single Page Course Details */}
                <div className='crsDetailsContent grid'>
                    <div className='course_img'>
                        <img src={bg1} alt="courseImg" />
                    </div>
                    <div className='crsDetail_title'>
                        <h2>Course Details Title</h2>
                    </div>
                    <div className='crsDetail_desp'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='csr_instructor'>
                        <h2>Course Instructor</h2>
                        <h3 className='ins_name'>Prof. Dr Asif Hanif</h3>
                        <span className='specialized'>Biostatical Training</span>
                        <p className='ins_bio'>University of Lahore and Biostatical Department of Health and Sciences Biology of science medical.</p>
                    </div>
                    <div className='crsDetail_action'>
                        <h2>Course Details</h2>
                        <span><AccessTimeIcon />1hr</span>
                        <Link to="#"><AddShoppingCartIcon />Buy Now</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseDetails