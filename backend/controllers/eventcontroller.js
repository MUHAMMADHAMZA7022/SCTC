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
  const { name,description,startdate,starttime,enddate,endtime,organization,location} =
  req.body;
  const images = req.body.images;
  const mycloud = await cloudinary.v2.uploader.upload(images,{
    folder: "events",
    gravity: "faces", crop: "fill",
    quality: "auto", fetch_format: "auto"
    
  });

  req.body.user = req.user.id;
  const courses = await Event.create({
    name,
    description,
startdate,
starttime,
enddate,
endtime,
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

  const apiFeature = new ApiFeatures(Event.find(), req.query)
    .search()
    .filter();
  allevents = await apiFeature.query;

  res.status(200).json({
    success: true,
    allevents,
    eventscount,
  });
});
//get all admin courses
exports.alleventsadmin = catchasyncerror(async (req, res) => {
  const event = await Event.find();
  res.status(200).json({
    success: true,
    event,
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
