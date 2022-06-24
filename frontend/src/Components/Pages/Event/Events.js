import React, { Fragment, useEffect } from "react";

import EventCard from "../../Pages/Event/EventCard";
import { CLEAR_ERROR_EVENT, getEvent } from "../../../redux/action/eventaction";
import { useSelector, useDispatch } from "react-redux";
import Loader1 from "../../Layout/Loader/loader";
import { useAlert } from "react-alert";
function Events() {

  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading, events, error: eventerror } = useSelector((state) => state.events);
  useEffect(() => {
  
    if (eventerror) {
      alert.error(eventerror);

      dispatch(CLEAR_ERROR_EVENT);
    }
    dispatch(getEvent());
  }, [alert, dispatch, eventerror]);
  return (
    <Fragment>
      {loading===false? (
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