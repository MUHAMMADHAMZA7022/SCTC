const User = require("../models/usermodel");
const sendEmail = require("../utils/sendmail");
const sendToken = require("../utils/getjwt");
const crypto = require("crypto");
const Errorhandler = require("../middleware/errorhandler"); //ye hum ny product error k liye bnya mtlb glt id dy user to server bnd naw ho
const catchasyncerror = require("../middleware/asyncerror");
exports.createuser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    user = await User.create({
      name,
      email,
      password,
    });
    sendToken(res, user, 201, "User Registered Successfully");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//login
exports.loginuser = catchasyncerror(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Errorhandler("Please Enter Email & Password", 400)); //ye khud errorhandler bnya wa ha
  }
  const user = await User.findOne({ email }).select("+password"); //password sedha is liye ni diya wa kio k upar false kiyawa tbhi select method use kiya
  if (!user) {
    return next(new Errorhandler("Invalid Email ", 401));
  }
  const passwordmatch = await user.comparePassword(password); //ye fuction bnya wa bcrpyt ka model mein compare k liye
  if (!passwordmatch) {
    return next(new Errorhandler("Invalid  password", 401));
  }
  sendToken(res,user,200, "Login Successfully");
});
exports.logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
      })
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.forgetPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!req.body.email) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all the fields" });
    }
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    //Get resettoken save kiya databse mein
    const resettoken = user.Resetpasswordtoken();

    await user.save({ validateBeforeSave: false });

    const resetpasswordurl = `${process.env.Frontend_Url}/password/reset/${resettoken}`;
    const message = `Your Password reset token is:-\n\n ${resetpasswordurl} \n\n If you have not requested this email then, please ignore it`;
    try {
      await sendEmail({
        email: user.email,
        subject: "SCTC PASSWORD RECOVERY",
        message,
      });
      res.status(200).json({
        success: true,
        message: `OTP sent to ${user.email}`,
      });
    } catch (error) {
      user.resetpasswordtoken = undefined;
      user.resetpasswordexpire = undefined; //ye undefined kiya k phly upar save krwa chuky ha error naw aye tbhi undefined kr k save kr diya wa
      await user.save({ validateBeforeSave: false }); //ye save kr liya hum ny
      res.status(500).json({ success: false, message: error.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error.message);
  }
};
exports.resetPassword = async (req, res) => {
  try {
    if (!req.body.password || !req.body.confirmpassword) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all the fields" });
    }
    if (req.body.password !== req.body.confirmpassword) {
      return res
        .status(404)
        .json({ success: false, message: "Password Not Matched" });
    }

    const resetpasswordtoken = crypto
      .createHash("sha256")
      .update(process.env.secretresettoken)
      .digest("hex");

    console.log(resetpasswordtoken);
    const user = await User.findOne({
      resetpasswordtoken: resetpasswordtoken,
      resetpasswordexpire: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Otp Invalid or has been Expired" });
    }

    user.password = req.body.password;
    user.resetpasswordtoken = undefined;
    user.resetpasswordexpire = undefined;
    await user.save();

    sendToken(res, user, 200, "Password Changed Successfully");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//me
exports.getuserdetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//get all users(Admin)
exports.getallusers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "No User Found" });
  }
};
//get single user(Admin)
exports.getsingleuser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({
          success: false,
          message: `User Does Not exist this id:${req.params.id}`,
        });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "User Does Not exist this id:${req.params.id}",
      });
  }
};
// user delete --(Admin)
exports.deleteuser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(
        new Errorhandler(`User Does Not exist this id:${req.params.id}`)
      );
    }
    if (user.email === "muhammadhamza7022@gmail.com") {
      return next(new Errorhandler(`ADMIN NOT DELETED`));
    }

    await user.remove();
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: `User Does Not exist this id: ${req.params.id}`,
      });
  }
};
//update password
exports.updatepassword = async (req, res, next) => {
  try {
    if(!req.body.oldpassword || !req.body.newpassword || !req.body.confirmpassword){
      return res.status(400).json({success:false,message:"Please enter all the fields"})
    }
    const user = await User.findById(req.user.id).select("+password");
    const passwordmatch = await user.comparePassword(req.body.oldpassword); //ye fuction bnya wa bcrpyt ka model mein compare k liye
    if (!passwordmatch) {
    return res.status(401).json({ success: false, message: "Old password Incorrect" });

    }
    if (req.body.newpassword !== req.body.confirmpassword) {
    return res.status(404).json({ success: false, message: "Password Not Matched" });

    }
    user.password = req.body.newpassword;
    await user.save();
    sendToken(res,  user,200, "Password Changed Successfully");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//update user profile
exports.updateprofile = async (req, res) => {
  try {
    if(!req.body.name || !req.body.email){
      return res.status(400).json({success:false,message:"Please enter all the fields"})
    }
    const newuserdata = {
      name: req.body.name,
      email: req.body.email,
    };
    const user = await User.findByIdAndUpdate(req.user.id, newuserdata, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      user,
      message: "Profile Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
    
  
}
