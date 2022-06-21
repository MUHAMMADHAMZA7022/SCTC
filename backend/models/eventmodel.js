const mongoose = require("mongoose");
const eventSechema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please Enter Event Name"],
    },
    description: {
        type: String,
        required: [true, "Please Enter Event Description"],
    },
    images: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    startdate: {
        type: Date,
        required: [true, "Please Enter  Event Start Date"],

    },
    enddate:{
        type: Date,
        required: [true, "Please Enter  Event End Date"],
    },

    location:{
        // type: Number*24*60*60*1000 + Date.now ,
        type:String,
        required: [true, "Please Enter Event Location"],

    },
    createdate: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Event", eventSechema)