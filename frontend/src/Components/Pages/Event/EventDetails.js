
import bg3 from '../../../images/slide-img-3.jpg';
// import bg2 from '../../../images/slide-img-2.jpg';
import {Link} from 'react-router-dom';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import React, { Fragment, useEffect, } from "react";
// import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDetails,
 
  CLEAR_ERROR_EVENT,
} from "../../../redux/action/eventaction";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import './EventDetails.css';
function EventDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const { event, error } = useSelector((state) => state.eventDetails);
    console.log(event)
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(CLEAR_ERROR_EVENT);
      }
     
  
   
      dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert]);
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
                        <img src={event?.images?.url} alt="courseImg" />
                    </div>
                    <div className='evnDetail_title'>
                        <h2>{event.name}</h2>
                    </div>
                    <div className='evnDetail_desp'>
                        <p>{event.description}</p>
                    </div>
                    <div className='evn_time'>
                        <h2>Start Time</h2>
                        <span className='evnt_date'><CalendarMonthOutlinedIcon />{String(event.startdate).substr(0,9)}</span>
                        <span className='evnt_time'><AccessTimeIcon />{String(event.startdate).substr(11,10)}</span>
                        <h2>Ending Time</h2>
                        <span className='evnt_date'><CalendarMonthOutlinedIcon />{String(event.enddate).substr(0,9)}</span>
                        <span className='evnt_time'><AccessTimeIcon />{String(event.enddate).substr(11,10)}</span>
                        <h2>Event Location</h2>
                        <span className='evnt_location'><LocationOnIcon />{event.location}</span>
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