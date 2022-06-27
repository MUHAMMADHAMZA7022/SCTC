import "./Dashboard.css";
import Sidebar from "./Sidebar";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvents, CLEAR_ERROR_EVENT } from "../../../redux/action/eventaction";
import { NEW_EVENT_RESET } from "../../../redux/Constant/eventconstant";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { LoadingButton } from "@mui/lab";

function CreateService() {

    let history = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, success, loading } = useSelector((state) => state.newEvent);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organization, setOrganization] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [location, setlocation] = useState("");
  const [images, setImages] = useState();
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERROR_EVENT());
    }

    if (success) {
      alert.success("Event Created Successfully");
      history("/all/events");
      dispatch({ type: NEW_EVENT_RESET });
    }
  }, [dispatch, success, error, alert, history]);

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
    dispatch(createEvents(value));
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
    console.log(images);
    console.log(avatarPreview);
  };


  return (
    
    <Fragment>
      <div className="dashboard_holder courses">
        {/* Sidebar */}
        <div className="dSidebar">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="dashboard_content courses_content">
          <h1>Create Service</h1>
          <form
            className="courseForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <div class="form__group field">
              <input
                className='form__field'
                type="text"
                placeholder="Service Title"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label for="name" className="form__label">Service Title</label>
            </div>
            <div class="form__group field">
              <textarea
                className='form__field'
                placeholder="Service Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
              <label for="name" className="form__label">Service Description</label>
            </div>
            <div class="form__group field">
              {images ? (
                <img
                  src={avatarPreview}
                  alt="Event Preview"
                  className="imageeee"
                />
              ) : (null)}
              <input
                className='form__field'
                type="file"
                placeholder="Service Image"
                name="images"
                accept="image/*"
                onChange={updateProfileDataChange}
              />
            </div>
            {loading === true ? (
              <LoadingButton
                className="btn_primary"
                loading
                loadingPosition="center"
                variant="outlined"
              >
                Create
              </LoadingButton>
            ) : (
              <button className="btn_primary">Create</button>
            )}
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateService