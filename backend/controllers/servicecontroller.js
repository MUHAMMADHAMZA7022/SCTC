const Service = require("../models/servicemodel");
const sendEmail = require("../utils/sendmail");
const sendToken = require("../utils/getjwt");
const Errorhandler = require("../middleware/errorhandler");
const catchasyncerror = require("../middleware/asyncerror");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
//createcourse -- Admin
exports.createservice = async (req, res, next) => {
try {
  const { name,description} = req.body;
  const images = req.body.images;
  const mycloud = await cloudinary.v2.uploader.upload(images,{
    folder: "service",
    gravity: "faces", crop: "fill",
    quality: "auto", fetch_format: "auto"
    
  });

  req.body.user = req.user.id;
  const service = await Service.create({
    name,
    description,
    images: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });
  res.status(201).json({
    success: true,
    service,
    message: "Service Created Successfully",
  });
} catch (error) {
  res.status(500).json({ success: false, message: error.message });

}
}

//Getcourses All
exports.allservice = catchasyncerror(async (req, res) => {
  const servicecount = await Service.countDocuments();

  const latestservice = await Service.find().sort( { _id : -1 });
  res.status(200).json({
    success: true,
    latestservice,
    servicecount,
  });
});
//get all admin courses
exports.allservicesadmin = catchasyncerror(async (req, res) => {
  const latestservice = await Service.find().sort( { _id : -1 });
  res.status(200).json({
    success: true,
    latestservice,
  });
});
//one course
exports.singleservice = catchasyncerror(async (req, res, next) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return next(new Errorhandler("Service Not Found", 404));
  }
  res.status(200).json({
    success: true,
    service,
  });
});


// updateCourse -- Admin
exports.updateservice = catchasyncerror(async (req, res,next) => {
  let uservice = await Service.findById(req.params.id);
  if (!uservice) {
    return next(new Errorhandler("Service Not Found", 404)); //ly class bnae v utils mein phir ye error bnya wa sb sy phir middleare ein erro.js bnae
  }
 

  // console.log(dat)
  // //addd avtar cloudinary
  if (req.body.images !== "") {

    const imageId = uservice.images.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: "service",
      gravity: "faces", crop: "fill",
    quality: "auto", fetch_format: "auto"
    });

    req.body.images = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  uservice = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    uservice,
    message: "Service Update Successfully",
  });
});

// Delete Course---Admin
exports.deleteservice = catchasyncerror(async (req, res, next) => {
  const dservice = await Service.findById(req.params.id);
  if (!dservice) {
    return next(new Errorhandler("Service Not Found", 404));
  }
  // Deleting Images From Cloudinary
  const imageId = dservice.images.public_id;

  await cloudinary.v2.uploader.destroy(imageId);
  

  await dservice.remove();
  res.status(200).json({
    success: true,
    message: "Service Deleted Successfully",
  });
});
