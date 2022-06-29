import React, { Fragment } from 'react'
import './Contact.css'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FaxIcon from '@mui/icons-material/Fax';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

function Contact() {
    return (
        <Fragment>
            <div className='contactUs'>
                <div className='contact_boxes grid'>
                    <div className='ct_box'>
                        <div className='ct_icon'>
                            <MapsHomeWorkIcon />
                        </div>
                        <div className='ct_text'>
                            <h3>Our Location</h3>
                            <address>4048 Mutton Town Road,<br /> Lahore, Pakistan</address>
                        </div>
                    </div>
                    <div className='ct_box'>
                        <div className='ct_icon'>
                            <FaxIcon />
                        </div>
                        <div className='ct_text'>
                            <h3>Our Phone & Fax</h3>
                            <a href="tel:+923209455811">+92 320 9455811</a>
                            <a href="tel:+923209455811">+92 320 9455811</a>
                        </div>
                    </div>
                    <div className='ct_box'>
                        <div className='ct_icon'>
                            <MarkEmailUnreadIcon />
                        </div>
                        <div className='ct_text'>
                            <h3>Email</h3>
                            <a href="email:info@sctc.com.pk">info@sctc.com.pk</a>
                            <a href="email:info@sctc.com.pk">info@sctc.com.pk</a>
                        </div>
                    </div>
                </div>
                <h2>Get in touch with SCTC</h2>
                <div className='contactUs_holder grid'>
                    <div className='ourMap'></div>
                    <div className='contactUs_form'>
                        <form>
                            <input type={"text"} placeholder="First Name" />
                            <input type={"text"} placeholder="Last Name" />
                            <input type={"email"} placeholder="Email" />
                            <input type={"text"} placeholder="Subject(Optional)" />
                            <textarea placeholder='Write your message...'></textarea>
                            <button className='btn_primary'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact