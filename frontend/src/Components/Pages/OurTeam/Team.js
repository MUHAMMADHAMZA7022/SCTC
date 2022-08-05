import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import bg3 from '../../../images/slide-img-3.jpg';
import './Team.css'

function Team() {
    return (
        <Fragment>
            {/* Single Page Banner */}
            <div className='crs_banner'>
                <div className='crs_bannerImg'>
                    <img src={bg3} alt="banner" />
                </div>
                <div className="crsBanner_content">
                    <h2>Our Team</h2>
                </div>
            </div>
            <div className='ourTeam'>
                <div className='teamHeading grid'>
                    <h1>We are professionals in Biostatistics, IT and Medical research</h1>
                </div>
                <div className='ourTeam_holder grid'>
                    <div className='teamBox'>
                        <h2>Asif Hanif</h2>
                        <span>Assistant Prof. of Biostatistics: GD-PGMI</span>
                        <p>Managing Director at SCTC (Leading Biostatistics)</p>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>asifhanif@gmail.com</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Asif Hanif</h2>
                        <span>Assistant Prof. of Biostatistics: GD-PGMI</span>
                        <p>Managing Director at SCTC (Leading Biostatistics)</p>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>asifhanif@gmail.com</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Asif Hanif</h2>
                        <span>Assistant Prof. of Biostatistics: GD-PGMI</span>
                        <p>Managing Director at SCTC (Leading Biostatistics)</p>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>asifhanif@gmail.com</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Asif Hanif</h2>
                        <span>Assistant Prof. of Biostatistics: GD-PGMI</span>
                        <p>Managing Director at SCTC (Leading Biostatistics)</p>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>asifhanif@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team