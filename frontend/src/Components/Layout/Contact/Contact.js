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
                    <div className='ourMap'>
                        <div className='map_holder'>
                            <iframe title='SCTC Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217972.70283029746!2d73.97748862499998!3d31.3914304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018a8ea548c1%3A0x4a52db69c2c814f!2sThe%20University%20of%20Lahore!5e0!3m2!1sen!2s!4v1656856582082!5m2!1sen!2s" width="600" height="450" style={{ border: "0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
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