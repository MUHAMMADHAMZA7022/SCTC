import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
 import bg3 from '../../../images/slide-img-3.jpg';

function Home({event}) {
  return (
    <Fragment>
     
              <div className='ev_holder'>
            <div className='ev_card'>
              <div className='ev_img'>
                <img src={event.images.url} alt='#' />
              </div>
              <div className='ev_content'>
                <div className='ev_date'>
                  <strong>{event.startdate}</strong>
                  <span className='uppercase'>SEP</span>
                </div>
                <div className='ev_content_holder'>
                  <div className='ev_title'>
                    <Link to={"#"}>
                      <h3>{event.name}</h3>
                    </Link>
                  </div>
                  <div className='ev_time'>
                    <span>7:30am</span>
                    <span>-</span>
                    <span>11:00am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Home