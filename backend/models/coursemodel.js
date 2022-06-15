const mongoose = require("mongoose");
const courseSechema = new mongoose.Schema({
    course_name: {
        type: String,
        trim: true,
        required: [true, "Please Enter Course Name"],
    },
    course_description: {
        type: String,
        required: [true, "Please Enter Course Description"],
    },
    course_file: {
        type: String,
        required: [true, "Please Enter Course File"],
    },

    course_price: {
        type: Number,
        required: [true, "Please Enter Course Price"],
        maxlength: [8, "Price caannot exceed 8 charaters"],
    },
    course_images: [{
        publicid: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },],
    course_instructor: {
        type: String,
        trim: true,
        required: [true, "Please Enter Course Instructor Name"],
    },
    course_deadline:{
        // type: Number*24*60*60*1000 + Date.now ,
        type:Number,
        required: [true, "Please Enter Course Deadline"],

    },
    course_cateogery: {
        type: String,
        required: [true, "Please Enter Course Cateogry"],
    },

  
    createdate: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Course", courseSechema)