const userModel= require("../models/userModels");
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.userSignInController=async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            console.log("all files are required")
            res.json({
                success:false,
                message:"Please Enter the email or password"
            })
        }
        const user = await userModel.findOne({email}).populate()
        if(!user){
            console.log("user not found")
            res.status(404).json({
                success:false,
                message:"user not found",
                next
            })
        }

        const comparePassword = await bcrypt.compare(password,user.password)
        if(!comparePassword){
            console.log(error)
            res.status(404).json({
                success:false,
                message:"incorrect password"
            })
        }

        // create jwt token
        const payload ={
            _id:user._id,
            email:user.email,
            role:user.role,
        }
        const token = jwt.sign(payload,process.env.JWT_TOKEN,{expiresIn:`24h`})

        const Option ={
            httpOnly:true,
            secure:true
        }
        res.cookie("token",token,Option).status(200).json({
            success:true,
            message:"login successfully"
        })
        
    } catch (error) {
        res.json({
            message:error,
            success:false
        })
    }
}
