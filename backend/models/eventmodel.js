const mongoose = require("mongoose");
const validator = require("validator");
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
      joining:
      [ {
        
          join_name: {
            type: String,
          },
          join_phone: {
            type: Number,
          },
          join_email: {
            type: String,
            unique: true,
            validate: [validator.isEmail, "Please Enter a valid Email"],
            trim: true,
          },
          join_date: {
            type: Date,
            default: Date.now
        }
       
        
      }],
    startdate: {
        type:  String,
        required: [true, "Please Enter  Event Start Date"],

    },
    
    enddate:{
        type:  String,
        
       
        required: [true, "Please Enter  Event End Date"],
    },
    counter:{
        type: String,
        // required: [true, "Please Enter  Event End Time"],
    },
    organization:{
        type: String,
        required: [true, "Please Enter Oraganization Name"],
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