import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
//  import bg3 from '../../../images/slide-img-3.jpg';

function Home({event}) {
  return (
    <Fragment>
     
              <div className='ev_holder'>
            <div className='ev_card'>
              <Link to={`/event/details/${event._id}`} className='ev_img'>
                <img src={event.images.url} alt='#' />
                
              </Link>
              <div className='ev_content'>
                <div className='ev_date'>
                  <strong>{String(event.startdate).substr(0,8)}</strong>
                </div>
                <div className='ev_content_holder'>
                  <div className='ev_title'>
                    <Link to={`/event/details/${event._id}`}>
                      <h3>{event.name}</h3>
                    </Link>
                  </div>
                  <div className='ev_time'>
                    <span>{String(event.startdate).substr(10,4)}{String(event.startdate).substr(17,11)}</span>
                    <span>-</span>
                    <span>{String(event.enddate).substr(10,4)}{String(event.enddate).substr(17,11)}</span>
                   
    
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Home