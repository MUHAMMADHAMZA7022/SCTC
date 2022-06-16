const mongoose = require("mongoose");
const courseSechema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please Enter Course Name"],
    },
    description: {
        type: String,
        required: [true, "Please Enter Course Description"],
    },
    course_file: {
        type: String,
        required: [true, "Please Enter Course File"],
    },

    price: {
        type: Number,
        required: [true, "Please Enter Course Price"],
        maxlength: [8, "Price caannot exceed 8 charaters"],
    },
    images: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
        instructor: {
        type: String,
        trim: true,
        required: [true, "Please Enter Course Instructor Name"],
    },
    deadline:{
        // type: Number*24*60*60*1000 + Date.now ,
        type:Number,
        required: [true, "Please Enter Course Deadline"],

    },
    cateogery: {
        type: String,
        required: [true, "Please Enter Course Cateogry"],
    },

  
    createdate: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Course", courseSechema)