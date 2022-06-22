import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function Home({course}) {
  return (
    <Fragment>
     
          <div className='hc_holder'>
            <div className='hc_card'>
              <div className='hc_img'>
                <img src={course.images.url} alt='#' />
              </div>
              <div className='hc_content'>
                <h2>{course.name}</h2>
                <p>{course.description}</p>
                <div className='hc_action'>
                  <Link to={"#"} className='red_link'>Join now</Link>
                  <Link to={"#"}>View Details</Link>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Home