const express = require("express");
const router = express.Router();
const {
  createuser,
} = require("../controllers/usercontroller"); //ye import krwaya ha create product jaha sbfunctionality pri v
router
  .route("/register").post( createuser);
  module.exports = router;