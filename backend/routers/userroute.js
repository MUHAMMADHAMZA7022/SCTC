const express = require("express");
const router = express.Router();
const {
  createuser, loginuser, logout, forgetPassword, resetPassword,
} = require("../controllers/usercontroller"); //ye import krwaya ha create product jaha sbfunctionality pri v
router.route("/register").post( createuser);
 router.route("/login").post( loginuser);
 router.route("/forgotpassword").post( forgetPassword);
 router.route("/resetpassword/:token").put( resetPassword);
 router.route("/logout").get(logout);

  module.exports = router;

