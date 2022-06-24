import React, { Fragment, useEffect } from "react";

import EventCard from "../../Pages/Event/EventCard";
import { CLEAR_ERROR, getProduct } from "../../../redux/action/courseaction";
import { CLEAR_ERROR_EVENT, getEvent } from "../../../redux/action/eventaction";
import { useSelector, useDispatch } from "react-redux";
import Loader1 from "../../Layout/Loader/loader";
import { useAlert } from "react-alert";
function Events() {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { courses, error } = useSelector((state) => state.courses);
  const { events, error: eventerror } = useSelector((state) => state.events);
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
      {events ? (
        events
          .map((event) => (
            <EventCard key={event._id} event={event} />
          ))
      ) : (
        <Loader1 />
      )}

    </Fragment>
  )
}

export default Events