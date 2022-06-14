const User=require("../models/usermodel");
const  sendToken  =require( "../utils/getjwt");

exports.createuser= async (req, res) => {
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

    sendToken(
      res,
      user,
      201,
      "User Registered Successfully"
    );
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};