import bg3 from '../../../images/slide-img-3.jpg';
import React, { Fragment, useState  } from "react";
import { Link } from 'react-router-dom';
import TurnedInIcon from '@mui/icons-material/TurnedIn';


function ServiceDetails() {

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };



  return (
    <Fragment>
        <div className='eventsDetails'>
            {/* Single Page Banner */}
            <div className='evn_banner'>
                <div className='evn_bannerImg'>
                    <img src={bg3} alt="banner" />
                </div>
                <div className="evnBanner_content">
                    <h2>Service Detailed</h2>
                </div>
            </div>
            {/* Single Page Course Details */}
            <div className='evnDetailsContent grid'>
                <div className='evnDetail_title'>
                    <h2>Service Name</h2>
                </div>
                <div className='evnDetail_desp'>
                    <p>Service description</p>
                </div>
                <div className='evnDetail_action'>
                    <Link to="#" onClick={ToggleClass}><TurnedInIcon />Take Appointment</Link>
                    <div className={isActive ? "evn_box" : null}>
                        <div className='eventJoin_holder'>
                            <p className='capitalize'>for contact to consultant please fill the below information*</p>
                            <form className='eventJoin_form'>
                                <input type={"text"} placeholder="Name" />
                                <input type={"email"} placeholder="Email" />
                                <textarea placeholder='Your message for consultant'></textarea>
                                <button className='btn_primary'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ServiceDetails