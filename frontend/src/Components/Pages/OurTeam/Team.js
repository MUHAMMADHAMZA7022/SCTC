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
                            <Link to={"#"}>asif@sctc.com.pk</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Asim Butt</h2>
                        <span>Assistant Managing Director at SCTC (Leading Biostatistics)</span>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>	asim@sctc.com.pk</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Amjad Rafique</h2>
                        <span>Assistant Managing Director at SCTC (Leading Biostatistics)</span>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>amjad@sctc.com.pk</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Tahira Ashraf</h2>
                        <span>Research Coordinator at SCTC (Leading Biostatistics)</span>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>Tahira@sctc.com.pk</Link>
                        </div>
                    </div>
                </div>
                <div className='ourTeam_holder grid'>
                    <div className='teamBox'>
                        <h2>Iqra Waheed</h2>
                        <span>Senior Biostatistician at SCTC (Leading Biostatistics)</span>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>iqra@sctc.com.pk</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Kashif Saddique</h2>
                        <span>Senior Biostatistician at SCTC (Leading Biostatistics)</span>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>	Kashif@sctc.com.pk</Link>
                        </div>
                    </div>
                    <div className='teamBox'>
                        <h2>Umar Farooq</h2>
                        <span>Biostatistician at SCTC (Leading Biostatistics)</span>
                        <div className='teamAction'>
                            <span>Email:</span>
                            <Link to={"#"}>	umar@sctc.com.pk</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team