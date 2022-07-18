import bg3 from '../../../images/slide-img-3.jpg';
import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader1 from "../../Layout/Loader/Courseloader";

import {
    getProductDetails,
service_email,
CLEAR_ERROR_SERVICE,
} from "../../../redux/action/serviceaction";
import { useAlert } from 'react-alert';
function ServiceDetails() {
    const { id } = useParams();
    const dispatch=useDispatch();

    const { service, error } = useSelector((state) => state.serviceDetails);
    const {loading,error:iserror,isservice} = useSelector((state) => state.joinservice);

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };
    const alert = useAlert();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [message, setmessage] = useState("");
    const serviceSubmitHandler = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("phoneNo", phoneNo);
        myForm.set("message", message);


    
        dispatch(service_email(id, myForm));
    setname("")
    setemail("")
    setphoneNo("")
    setmessage("")
      };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(CLEAR_ERROR_SERVICE);
        }
        if (iserror) {
            alert.error(iserror);
            dispatch(CLEAR_ERROR_SERVICE);
        }
         
          if (isservice) {
            alert.success("Message Send Successfully");
            
          }

        dispatch(getProductDetails(id));
        
    }, [dispatch, id, error, iserror,alert,isservice]);



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
            { loading===true?(<Loader1/>):(
            <div className='evnDetailsContent grid'>
                <div className='evnDetail_title'>
                    <h2>{service&&service.name}</h2>
                </div>
                <div className='evnDetail_desp'>
                    <p>{service&&service.description}</p>
                </div>
                <div className='evnDetail_action'>
                    <Link to="#" onClick={ToggleClass}><TurnedInIcon />Take Appointment</Link>
                    <div className={isActive ? "evn_box" : null}>
                        <div className='eventJoin_holder'>
                            <p className='capitalize'>for contact to consultant please fill the below information*</p>
                            
                 
                            <form className='eventJoin_form' onSubmit={serviceSubmitHandler}>
                                <input type={"text"} placeholder="Name"  value={name} onChange={(e)=>setname(e.target.value)}/>
                                <input type={"email"} placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                                <input type={"number"} placeholder="PhoneNo" value={phoneNo} onChange={(e)=>setphoneNo(e.target.value)}/>
                                <textarea placeholder='Your message for consultant' value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
                                <button className='btn_primary'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )}

        </div>

    </Fragment>
  )
}

export default ServiceDetails