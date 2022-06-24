import React, { Fragment, useEffect } from "react";
import './Events.css'
import bg3 from '../../../images/slide-img-3.jpg';

import EventCard from "../../Pages/Event/EventCard";
import { CLEAR_ERROR, getProduct } from "../../../redux/action/courseaction";
import { CLEAR_ERROR_EVENT, getEvent } from "../../../redux/action/eventaction";
import { useSelector, useDispatch } from "react-redux";
import Loader1 from "../../Layout/Loader/loader";
import { useAlert } from "react-alert";
function Events() {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { events, error, error: eventerror } = useSelector((state) => state.events);
  useEffect(() => {
    if (error) {
      alert.error(error);

      dispatch(CLEAR_ERROR);
    }
    if (eventerror) {
      alert.error(eventerror);

      dispatch(CLEAR_ERROR_EVENT);
    }
    dispatch(getEvent());
    dispatch(getProduct());
  }, [alert, dispatch, error, eventerror]);
  return (
    <Fragment>
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

    </Fragment>
  )
}

export default Events