import "./Dashboard.css";
import Sidebar from './Sidebar';
import React, { Fragment,  useState, useEffect} from "react";
import {  useDispatch,useSelector } from "react-redux";
import {  courseregister,CLEAR_ERROR } from "../../../redux/action/courseaction";
import { COURSE_RESET } from "../../../redux/Constant/courseconstant";
import { useNavigate } from "react-router-dom";
import {useAlert} from "react-alert"
function Courses() {
let history = useNavigate();
    const dispatch = useDispatch();
  const alert = useAlert();

   const {  error, success } = useSelector((state) => state.newCourse);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [course_file, setcourse_file] = useState("");
  const [cateogery, setcateogery] = useState("");
  const [instructor, setinstructor] = useState("");
  const [deadline, setdeadline] = useState(0);
  const [images, setImages] = useState();
  const [avatarPreview, setAvatarPreview] = useState("");


  
  const categories = [
    "Womens",
    "Newinn",
    "Accessories",
    "Unstiched",
    "AClothes",
    "Replicas",
    "ReadyToWear",
    "VaslFeatured",
    "Bags",
    "Scarves",
    "Perfumes",
    "Cosmetics"
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERROR());
    }

    if (success) {
     alert.success("Product Created Successfully");
      history("/dashboard");
       dispatch({ type: COURSE_RESET });
    }
  }, [dispatch,success,error, alert,history,]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("cateogery", cateogery);
    myForm.set("deadline", deadline);
    myForm.set("instructor", instructor);
    myForm.set("course_file", course_file);
    myForm.set("images", images);
    // const value = Object.fromEntries(myForm.entries());
    // value.topics = myForm.getAll("topics");
    const value = Object.fromEntries(myForm.entries());
    dispatch(courseregister(value));
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
      <div className='dashboard_holder courses'>
        {/* Sidebar */}
        <div className='dSidebar'>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className='dashboard_content courses_content'>
          <h1>Create Course</h1>
          <form className='courseForm'  onSubmit={createProductSubmitHandler}>
          <input
                type="text"
                placeholder="Course Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
             <input
                type="text"
                placeholder="File Url"
                required
                value={course_file}
                onChange={(e) => setcourse_file(e.target.value)}
              />
            <textarea
                placeholder="Course Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            <input
                type="number"
                placeholder=" Course Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />

  

                  <img src={avatarPreview} alt="Avatar Preview" className="imageeee"/>
               
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={updateProfileDataChange}
                />
            <input
                type="text"
                placeholder="INstructor Name"
                required
                value={instructor}
                onChange={(e) => setinstructor(e.target.value)}
              />
            <select onChange={(e) => setcateogery(e.target.value)}>
                 <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
                            <input
                type="number"
                placeholder="Select Deadline"
                required
                onChange={(e) => setdeadline(e.target.value)}
              />
            <button className='btn_primary'>Create</button>
            
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Courses

// import "./Dashboard.css";
// import Sidebar from './Sidebar';
// import React, { Fragment, useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {  clear_errors, courseregister } from "../../../redux/action/courseaction";
// // import { useAlert } from "react-alert";
// import { Button } from '@mui/material';
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import DescriptionIcon from "@mui/icons-material/Description";
// import StorageIcon from "@mui/icons-material/Storage";
// import SpellcheckIcon from "@mui/icons-material/Spellcheck";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// // import { NEW_PRODUCT_RESET } from "../../redux/constant/productConstants";
// // import Loader from "./../Layout/Loader/Loader";

// const Newcourses = ({ history }) => {
//   const dispatch = useDispatch();
//   // const alert = useAlert();

//   const { loading, error, success } = useSelector((state) => state.coursereducer);

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState("");
//   const [file, setfile] = useState("");
//   const [cateogery, setcateogery] = useState("");
//   const [instructor, setinstructor] = useState(0);
//   const [deadline, setdeadline] = useState(0);
//   const [images, setImages] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);

//   const categories = [
//     "Womens",
//     "Newinn",
//     "Accessories",
//     "Unstiched",
//     "AClothes",
//     "Replicas",
//     "ReadyToWear",
//     "VaslFeatured",
//     "Bags",
//     "Scarves",
//     "Perfumes",
//     "Cosmetics"
//   ];

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clear_errors());
//     }

//     if (success) {
//       alert.success("Product Created Successfully");
//       history.push("/admin/dashboard");
//       // dispatch({ type: NEW_PRODUCT_RESET });
//     }
//   }, [dispatch,  error, history, success]);

//   const createProductSubmitHandler = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();
//     myForm.set("name", name);
//     myForm.set("price", price);
//     myForm.set("description", description);
//     myForm.set("cateogery", cateogery);
//     myForm.set("deadline", deadline);
//     myForm.set("instructor", instructor);
//     myForm.set("file", file);

//     images.forEach((image) => {
//       myForm.append("images", image);
//     });
//     // const value = Object.fromEntries(myForm.entries());
//     // value.topics = myForm.getAll("topics");
//     dispatch(courseregister(myForm));
//   };

//   const createProductImagesChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);
//     setImagesPreview([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((old) => [...old, reader.result]);
//           setImages((old) => [...old, reader.result]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });
//   };

//   return (
//     <Fragment>
//       {/* <MetaData title="Create Product" /> */}
//       <div className="dashboard">
//         < Sidebar />
//         <div className="newProductContainer">
//           <form
//             className="createProductForm"
//             encType="multipart/form-data"
//             onSubmit={createProductSubmitHandler}
//           >
//             <h1>Create Product</h1>
//             {/* {loading === true ? <Loader /> : null} */}

//             <div>
//               <SpellcheckIcon />
//               <input
//                 type="text"
//                 placeholder="Course Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <SpellcheckIcon />
//               <input
//                 type="text"
//                 placeholder="File Url"
//                 required
//                 value={file}
//                 onChange={(e) => setfile(e.target.value)}
//               />
//             </div>
//             <div>
//               <SpellcheckIcon />
//               <input
//                 type="text"
//                 placeholder="INstructor Name"
//                 required
//                 value={instructor}
//                 onChange={(e) => setinstructor(e.target.value)}
//               />
//             </div>
//             <div>
//               <AttachMoneyIcon />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 required
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//             <div>
//               <DescriptionIcon />

//               <textarea
//                 placeholder="Product Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 cols="30"
//                 rows="1"
//               ></textarea>
//             </div>
//             <div>
//               <AccountTreeIcon />
//               <select onChange={(e) => setcateogery(e.target.value)}>
//                 <option value="">Choose Category</option>
//                 {categories.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <StorageIcon />
//               <input
//                 type="number"
//                 placeholder="Select Deadline"
//                 required
//                 onChange={(e) => setdeadline(e.target.value)}
//               />
//             </div>
//             <div id="createProductFormFile">
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 onChange={createProductImagesChange}
//                 multiple
//               />
//             </div>
//             <div id="createProductFormImage">
//               {imagesPreview.map((image, index) => (
//                 <img key={index} src={image} alt="Product Preview" />
//               ))}
//             </div>

//             <Button
//               id="createProductBtn"
//               type="submit"
//               disabled={loading ? true : false}
//             >
//               Create
//             </Button>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Newcourses;
