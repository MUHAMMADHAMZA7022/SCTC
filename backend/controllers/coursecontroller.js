const Course = require("../models/coursemodel");
const sendEmail = require("../utils/sendmail");
const sendToken = require("../utils/getjwt");
const Errorhandler = require("../middleware/errorhandler");
const catchasyncerror = require("../middleware/asyncerror");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
//createcourse -- Admin
exports.createcourse = async (req, res, next) => {
try {
  
  const images = req.body.images;
  const mycloud = await cloudinary.v2.uploader.upload(images,{
    folder: "courses",
    width: 150,
    crop: "scale",
  });


 
  // req.body.user = req.user.id;
  const { name,  course_file, description, price, instructor,  cateogery,deadline } =
    req.body;

  const courses = await Course.create({
    name,
    description,
    course_file,
    price,
    instructor,
    deadline,
    cateogery,
    images: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });
  res.status(201).json({
    success: true,
    courses,
    message: "Course Created Successfully",
  });
} catch (error) {
  res.status(500).json({ success: false, message: error.message });

}
}

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
