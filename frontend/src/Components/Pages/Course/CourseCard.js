import React, { Fragment ,useState} from 'react'
import { Link } from 'react-router-dom';
import Loader1 from "../../Layout/Loader/Courseloader"

function Home({course}) {
const [loaded, setLoaded] = useState(false);

  setTimeout(() => {
    setLoaded(true);
  }, 1000);
  return (
    <Fragment>
           {loaded ? (
    <>


   
          <div className='hc_holder'>
            <div className='hc_card'>
              <Link to={`/course/details/${course._id}`} className='hc_img'>
                <img src={course.images.url} alt='#' />
              </Link>
              <div className='hc_content'>
                <h2>{course.name}</h2>
                <p>{course.description}</p>
                <div className='hc_action'>
                  <Link to={"#"} className='red_link'>Buy now</Link>
                  <Link to={`/course/details/${course._id}`}>View Details</Link>
                </div>
              </div>
            </div>
          </div>

    </>

    ) : (
        <>
          {/* <Imageload /> */}
          <Loader1 />
        </>
      )}
    </Fragment>
  )
}

export default Home