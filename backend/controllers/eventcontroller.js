const Event = require("../models/eventmodel");
const sendEmail = require("../utils/sendmail");
const sendToken = require("../utils/getjwt");
const Errorhandler = require("../middleware/errorhandler");
const catchasyncerror = require("../middleware/asyncerror");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
//createcourse -- Admin
exports.createevent = async (req, res, next) => {
try {
  const { name,description,startdate,enddate,organization,location} =
  req.body;
   var st=new Date(startdate).toLocaleString('default', {hour12: true});
   var et=new Date(enddate).toLocaleString('default', { hour12: true});
  
  const images = req.body.images;
  const mycloud = await cloudinary.v2.uploader.upload(images,{
    folder: "events",
    gravity: "faces", crop: "fill",
    quality: "auto", fetch_format: "auto"
    
  });
// console.log(st)
// console.log(startdate)
  req.body.user = req.user.id;
  const courses = await Event.create({
    name,
    description,
startdate:st,

enddate:et,

organization,
location,
    images: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });
  res.status(201).json({
    success: true,
    courses,
    message: "Event Created Successfully",
  });
} catch (error) {
  res.status(500).json({ success: false, message: error.message });

}
}

//Getcourses All
exports.allevent = catchasyncerror(async (req, res) => {
  const eventscount = await Event.countDocuments();

  const latestevent = await Event.find().sort( { _id : -1 });
  const oldevent = await Event.find();
  

  res.status(200).json({
    success: true,
    latestevent,
    oldevent,
    eventscount,
  });
});
//get all admin courses
exports.alleventsadmin = catchasyncerror(async (req, res) => {
  const latestevent = await Event.find().sort( { _id : -1 });
  res.status(200).json({
    success: true,
    latestevent,
  });
});
//one course
exports.singleevent = catchasyncerror(async (req, res, next) => {
  const sevent = await Event.findById(req.params.id);
  if (!sevent) {
    return next(new Errorhandler("Event Not Found", 404));
  }
  res.status(200).json({
    success: true,
    sevent,
  });
});


// updateCourse -- Admin
exports.updateevent = catchasyncerror(async (req, res,next) => {
  let uevent = await Event.findById(req.params.id);
  if (!uevent) {
    return next(new Errorhandler("Event Not Found", 404)); //ly class bnae v utils mein phir ye error bnya wa sb sy phir middleare ein erro.js bnae
  }
 

  // console.log(dat)
  // //addd avtar cloudinary
  if (req.body.images !== "") {

    const imageId = uevent.images.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: "events",
      gravity: "faces", crop: "fill",
    quality: "auto", fetch_format: "auto"
    });

    req.body.images = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  req.body.startdate=new Date(req.body.startdate).toLocaleString('default', { hour12: true});
  req.body.enddate=new Date(req.body.enddate).toLocaleString('default', { hour12: true});
  // console.log(req.body.startdate)
  // console.log(req.body.enddate)
  // var et=new Date(enddate).toLocaleString([], { hour12: true});
  uevent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    uevent,
    message: "Event Update Successfully",
  });
});

// Delete Course---Admin
exports.deleteevent = catchasyncerror(async (req, res, next) => {
  const devent = await Event.findById(req.params.id);
  if (!devent) {
    return next(new Errorhandler("Event Not Found", 404));
  }
  // Deleting Images From Cloudinary
  const imageId = devent.images.public_id;

  await cloudinary.v2.uploader.destroy(imageId);
  

  await devent.remove();
  res.status(200).json({
    success: true,
    message: "Event Deleted Successfully",
  });
});
