import React, { Fragment, useEffect } from "react";
import './Events.css'
import bg3 from '../../../images/slide-img-3.jpg';

import EventCard from "../../Pages/Event/EventCard";
import { CLEAR_ERROR_EVENT, getEvent } from "../../../redux/action/eventaction";
import { useSelector, useDispatch } from "react-redux";
import Loader1 from "../../Layout/Loader/loader";
import { useAlert } from "react-alert";
function Events() {

  const alert = useAlert();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { events, error, error: eventerror } = useSelector((state) => state.events);
=======
  const {loading, events, error: eventerror } = useSelector((state) => state.events);
>>>>>>> 57ee0d3481fe900ebf283dabda0c1bc82ee68f8c
  useEffect(() => {
  
    if (eventerror) {
      alert.error(eventerror);

      dispatch(CLEAR_ERROR_EVENT);
    }
    dispatch(getEvent());
  }, [alert, dispatch, eventerror]);
  return (
    <Fragment>
<<<<<<< HEAD
      <div className="events">
        {/* Single Page Banner */}
        <div className='crs_banner'>
          <div className='crs_bannerImg'>
            <img src={bg3} alt="banner" />
          </div>
          <div className="crsBanner_content">
            <h2>All Events</h2>
          </div>
        </div>
        <div className="events_holder grid">
          {events ? (
            events
              .map((event) => (
                <EventCard key={event._id} event={event} />
              ))
          ) : (
            <Loader1 />
          )}
        </div>
      </div>
=======
      {loading===false? (
        events
          .map((event) => (
            <EventCard key={event._id} event={event} />
          ))
      ) : (
        <Loader1 />
      )}
>>>>>>> 57ee0d3481fe900ebf283dabda0c1bc82ee68f8c

    </Fragment>
  )
}

export default Events