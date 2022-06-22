import React, { Fragment } from 'react'

import bg3 from '../../../images/slide-img-3.jpg';

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
                        <div className="banner_content">
                            <h2>Course Detailed</h2>
                        </div>
                </div>
                {/* Single Page Course Details */}
                <div className='crsDetailsContent'>
                    <div className='course_img grid'>
                        <img src={bg3} alt="courseImg" />
                    </div>
                    <div className='crsDetail_title'>
                        <h1>Course Details Title</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseDetails