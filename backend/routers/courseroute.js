const express = require("express");
const router = express.Router();
const auth =require( "../utils/auth");

const {
  createcourse,
} = require("../controllers/coursecontroller"); 
router.route("/createcourse").post( auth,createcourse);

  module.exports = router;

