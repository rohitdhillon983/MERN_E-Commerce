const userModel = require("../models/userModels");
const crypto = require("crypto");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt")

exports.forgetPassword=async(req,res)=>{
    const email = req.body.email;

    if(!email){
        console.log("email is required")
        res.status(404).json({
            success:false,
            message:"email is required"
        })
    }

    const findData = await userModel.findOne({email:email});
    

    const token = crypto.randomBytes(20).toString("hex");
    // console.log("teasting ",token)
    const updatedDetails = await userModel.findOneAndUpdate(
        {email:email},
        {
            token:token,
            resetPasswordExpires:Date.now()+3600000,
        },
        {new:true} 
    );
    console.log("details",updatedDetails)

    const url =`http://localhost:5173/reset-password/${token}`

    await mailSender(
        email,
        "Password Reset",
        `your Link for email Verification is ${url}. Please click this url to reset your Password`
    );
    res.json({
        success: true,
        message:
            "Email Sent Successfully, Please Check Your Email to Continue Further",
    });
}

exports.resetPassword=async(req,res)=>{
    try {
        const {password,confirmPassword,token} = req.body
        const Token = token.id;
        // console.log(Token);
        
        if (confirmPassword !== password) {
			return res.json({
				success: false,
				message: "Password and Confirm Password Does not Match",
			});
		}
        
		const userDetails = await userModel.findOne({ token: Token });
		if (!userDetails) {
			return res.json({
				success: false,
				message: "Token is Invalid",
			});
		}
		if (!(userDetails.resetPasswordExpires > Date.now())) {
			return res.status(403).json({
				success: false,
				message: `Token is Expired, Please Regenerate Your Token`,
			});
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		await userModel.findOneAndUpdate(
			{ token: Token },
			{ password: encryptedPassword },
			{ new: true }
		);
		res.json({
			success: true,
			message: `Password Reset Successful`,
		});
    } catch (error) {
        console.log(error)
        return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Updating the Password`,
		});
    }
}