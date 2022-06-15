const Course = require("../models/coursemodel");
const sendEmail = require("../utils/sendmail");
const sendToken = require("../utils/getjwt");
const Errorhandler = require("../middleware/errorhandler"); 
const catchasyncerror = require("../middleware/asyncerror");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
//createcourse -- Admin
exports.createcourse = catchasyncerror(async (req, res, next) => {
//   let images = [];

//   if (typeof req.body.images === "string") {
//     images.push(req.body.images);
//   } else {
//     images = req.body.images;
//   }

   const imagesLinks = [];

//   for (let i = 0; i < images.length; i++) {
//     const result = await cloudinary.v2.uploader.upload(images[i], {
//       folder: "courseimages",
//     });

//     imagesLinks.push({
//       publicid: result.public_id,
//       url: result.secure_url,
//     });
//   }

    imagesLinks.push({
        public_id: "avatars/ezc3su14rpw1afcurdem",
        url: "https://res.cloudinary.com/vasal-clothings/image/upload/v1644650641/avatars/ezc3su14rpw1afcurdem.png",
    });
  req.body.images = imagesLinks;

  req.body.user = req.user.id;
  const products = await Course.create(req.body);
  res.status(201).json({
    success: true,
    products,
    message: "Course Created Successfully",
  });
});

// //Getcourse All
// exports.allcourse = catchasyncerror(async (req, res) => {
//     //ye searc ki comand di ha k search krey product.find query ha or req.query jo querystr ha
//     // let resultperpage = 12;
//     // const productcount = await product.countDocuments();
//     // let apifeat = new ApiFeatures(product.find(), req.query)
//     //   .search()
//     //   .filter()
  
//     //   let allproducts  = await apifeat.query;
  
//     //   let filteredProductsCount = allproducts.length;
  
//     //   apifeat.pagination(resultperpage);
//     //    allproducts  = await apifeat.query;
//     const resultperpage = 8;
//     const coursecount = await Course.countDocuments();
  
//     const apiFeature = new ApiFeatures(Course.find(), req.query)
//       .search()
//       .filter();
//     //.pagination(resultperpage)
//     //  let allproducts = await apiFeature.query.clone();
  
//     //  let filteredProductsCount =  allproducts.length;
  
//     // apiFeature.pagination(resultperpage);
  
//     allcourse = await apiFeature.query;
  
//     res.status(200).json({
//       success: true,
//       allproducts,
//       productcount,
//       resultperpage,
//       //  filteredProductsCount,
//     });
//   });

