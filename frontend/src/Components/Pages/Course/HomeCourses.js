import React, { Fragment } from 'react';

import evn1 from '../../../images/evn1.jpg';
import bg3 from '../../../images/slide-img-3.jpg';

import { Link } from 'react-router-dom';
import './HomeCourses.css';

import AccessTimeIcon from '@mui/icons-material/AccessTime';

function HomeCourses() {
    return (
        <Fragment>
            <div className='eventsDetails'>
                {/* Single Page Banner */}
                <div className='crs_banner'>
                    <div className='crs_bannerImg'>
                        <img src={bg3} alt="banner" />
                    </div>
                    <div className="crsBanner_content">
                        <h2>All Courses</h2>
                    </div>
                </div>
                {/* Single Page Courses Content */}
                <div className='allCourses_content grid'>
                    {/* Search bar for search the entire courses */}
                    <form className='crs_searchBar'>
                        <ul className='unstyled filterCategories'>
                            <li className='ct_btn'>
                                Categories
                                <ul className='unstyled ct_list'>
                                    <li>Biology</li>
                                    <li>Statical</li>
                                    <li>Physics</li>
                                </ul>
                            </li>
                        </ul>
                        <input type='search' placeholder='Search your courses' />
                        <button className='btn_primary'>Search</button>
                    </form>
                    {/* All courses cards for each course */}
                    <div className='allCourses_card'>
                        <div className='allCrs_img'>
                            <img src={evn1} alt="banner" />
                        </div>
                        <div className='allCrs_data'>
                            <Link to="#">
                                <h2>Computing & IT and Mathmetics</h2>
                            </Link>
                            <span className='crs_dur'><AccessTimeIcon /> 3 weeks</span>
                            <span className='crs_amount'>
                                <span>$</span>
                                299.99
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomeCourses