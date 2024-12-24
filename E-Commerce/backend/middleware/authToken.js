const jwt = require("jsonwebtoken")
const userModel = require("../models/userModels")
require("dotenv").config()

exports.authToken=async(req,res,next)=>{
    try {
        const token = req.cookies.token || req.header
        if(!token){
            res.json({
                message:"JWT not find",
                success:false,
            })
        }

        const decoded = jwt.verify(token,process.env.JWT_TOKEN)

        const _id = decoded._id
        req.user = await userModel.findById(_id);
        // console.log("_id",req.user)
        next()
     
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error,
            next
        })
    }
}