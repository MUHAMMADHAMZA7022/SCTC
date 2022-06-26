import React, { Fragment } from 'react'
import bg3 from '../../../images/slide-img-3.jpg';
import './Services.css'

function Services() {
    return (
        <Fragment>
            <div className='services'>
                {/* Single Page Banner */}
                <div className='crs_banner'>
                    <div className='crs_bannerImg'>
                        <img src={bg3} alt="banner" />
                    </div>
                    <div className="crsBanner_content">
                        <h2>Our Services</h2>
                    </div>
                </div>
                {/* Main Content */}
                <div className='services_holder grid'>
                    <div className='service_card'>
                        <div className='srvc_img'>
                            <img src={bg3} alt="srvce img" />
                            <div className='srvc_content'>
                                <div className='srvcContent_holder'>
                                    <h2>This is service content</h2>
                                    <p>lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="cards">
                    <li>
                        <a href="" className="card">
                            <img src={bg3} alt="srvce img" className="card__image" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> */}
                                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                    <div className="card__header-text">
                                        <h3 className="card__title">Service Title</h3>
                                    </div>
                                </div>
                                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Services