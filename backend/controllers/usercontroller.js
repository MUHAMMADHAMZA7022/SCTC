const User = require("../models/usermodel");
const sendEmail = require("../utils/sendmail");
const sendToken = require("../utils/getjwt");
const crypto=require("crypto");

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
exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all the fields" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Email " });
    }
    const ismatch = await user.comparePassword(password);
    if (!ismatch) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong Password" });
    }

    sendToken(res, user, 200, "Login Successfully");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
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

    if (!req.body.password||!req.body.confirmpassword) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all the fields" });
    }
    if (req.body.password !== req.body.confirmpassword) {
      return res
        .status(404)
        .json({ success: false, message: "Password Not Matched" });
    }


    const resetpasswordtoken =  
 crypto.createHash('sha256')
 .update(process.env.secretresettoken)
 .digest('hex')

    console.log(resetpasswordtoken);
    const user = await User.findOne({
      resetpasswordtoken:resetpasswordtoken,
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
