import React, { Fragment } from 'react'

import bg3 from '../../../images/slide-img-3.jpg';
import bg2 from '../../../images/slide-img-2.jpg';
import {Link} from 'react-router-dom';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

import './EventDetails.css';
function EventDetails() {
    return (
        <Fragment>
            <div className='eventsDetails'>
                {/* Single Page Banner */}
                <div className='evn_banner'>
                    <div className='evn_bannerImg'>
                        <img src={bg3} alt="banner" />
                    </div>
                    <div className="evnBanner_content">
                        <h2>Event Detailed</h2>
                    </div>
                </div>
                {/* Single Page Course Details */}
                <div className='evnDetailsContent grid'>
                    <div className='event_img'>
                        <img src={bg2} alt="courseImg" />
                    </div>
                    <div className='evnDetail_title'>
                        <h2>Event Details Title</h2>
                    </div>
                    <div className='evnDetail_desp'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='evn_time'>
                        <h2>Start Time</h2>
                        <span className='evnt_date'><CalendarMonthOutlinedIcon />20-01-2022</span>
                        <span className='evnt_time'><AccessTimeIcon />9:00 AM</span>
                        <h2>Ending Time</h2>
                        <span className='evnt_date'><CalendarMonthOutlinedIcon />28-01-2022</span>
                        <span className='evnt_time'><AccessTimeIcon />10:00 PM</span>
                        <h2>Event Location</h2>
                        <span className='evnt_location'><LocationOnIcon />7856 UOL, Raiwand Road, Lahore</span>
                    </div>
                    <div className='evnDetail_action'>
                        <h2>Event Action</h2>
                        <Link to="#"><TurnedInIcon />Join Now</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EventDetails