import "./Dashboard.css";
import Sidebar from './Sidebar';
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_ERROR_EVENT,
  updateProduct,
  getProductDetails,
} from "../../../redux/action/eventaction";
import { useAlert } from "react-alert";
import { UPDATE_EVENT_RESET } from "../../../redux/Constant/eventconstant";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";


function UpdateCourse() {
    const dispatch = useDispatch();
    let history=useNavigate();
    const alert = useAlert();
    const productId = useParams().id;
    const { event, error } = useSelector((state) => state.eventDetails);
    const {
        loading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.event);
  
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [organization, setOrganization] = useState("");
      const [startdate, setStartdate] = useState("");
      const [enddate, setEnddate] = useState("");
      const [location, setlocation] = useState("");
      const [images, setImages] = useState();
      const [avatarPreview, setAvatarPreview] = useState("");
    
    
    
      useEffect(() => {
        if (event && event._id !== productId) {
          dispatch(getProductDetails(productId));
        } else {
        setName(event.name);
        setDescription(event.description);
        setStartdate(event.startdate);
        setEnddate(event.enddate);
        setlocation(event.location);
        setOrganization(event.organization);
        setAvatarPreview(event.images.url);
    }
        if (error) {
          alert.error(error);
          dispatch(CLEAR_ERROR_EVENT());
        }
    
        if (updateError) {
          alert.error(updateError);
          dispatch(CLEAR_ERROR_EVENT());
        }
    
        if (isUpdated) {
          alert.success("Event Updated Successfully");
          history("/all/events");
          dispatch({ type: UPDATE_EVENT_RESET });
        }
      }, [
        dispatch,
        alert,
        error,
        history,
        isUpdated,
        productId,
        event,
        updateError,
      ]);
    
      const createProductSubmitHandler = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("startdate", startdate);
        myForm.set("enddate", enddate);
        myForm.set("description", description);
        myForm.set("organization", organization);
        myForm.set("images", images);
        myForm.set("location", location);
        // const value = Object.fromEntries(myForm.entries());
        // value.topics = myForm.getAll("topics");
        const value = Object.fromEntries(myForm.entries());
        dispatch(updateProduct(productId,value));
    
      };
    
      const updateProfileDataChange = (e) => {
        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setImages(reader.result);
          }
        };
    
        reader.readAsDataURL(e.target.files[0]);
        setImages(reader.result);
       
    
      };
    return (
        <Fragment>
        <div className='dashboard_holder courses'>
          {/* Sidebar */}
          <div className='dSidebar'>
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className='dashboard_content courses_content'>
            <h1>Update Event</h1>
            <form className='courseForm' encType="multipart/form-data" onSubmit={createProductSubmitHandler}>
              <input
                type="text"
                placeholder="Course Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              <img src={avatarPreview} alt="Event Preview" className="imageeee" />
  
              <input
                type="file"
                name="images"
                accept="image/*"
                value={images}
                onChange={updateProfileDataChange}
              />
                <textarea
              placeholder="Event Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="1"
            ></textarea>
            <input
              type="date"
              placeholder="Event Start Date "
              required
               value={startdate}

              onChange={(e) => setStartdate(e.target.value)}
            />
        
            <input
              type="date"
              placeholder="Event End Date"
              required
              value={enddate}
              onChange={(e) => setEnddate(e.target.value)}
            />

            <input
              type="text"
              placeholder="Organization Name"
              required
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
 <input
              type="text"
              placeholder="Event Location"
              required
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
              {
                loading===true?( <LoadingButton
                  className='btn_primary'
                  loading
                  loadingPosition="center"
                  variant="outlined"
                >
                  Update
                </LoadingButton>):(
                  <button className='btn_primary'>Update</button>
  
                )
              }
  
            </form>
          </div>
        </div>
      </Fragment>
    )
}

export default UpdateCourse