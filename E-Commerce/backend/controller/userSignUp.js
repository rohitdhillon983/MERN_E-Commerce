const userModel = require("../models/userModels")
const bcrypt = require('bcrypt');

exports.userSignUpController=async(req,res)=>{
    try {
        // console.log(req.body)
        const {phone,email,name,password,confirmPassword}=req.body

        if(!phone || !email || !name ||!password ||!confirmPassword){
            res.status(400).json({
                message:"All files are required",
                success:false
            })
        }
        const user = await userModel.findOne({email})
        if(user){           
                throw new Error("user already exist ")
        }

        if(password !== confirmPassword){
            res.status(404).json({
                message:"password or confirm password not matched",
                success:false,
            })
        }
        const hashPassword =await bcrypt.hash(password,10)

        const userData = await userModel.create({phone,email,name,password:hashPassword,role : "GENERAL",})
        res.status(201).json({
            message:"user create successfully",
            success:true,
            data:userData,
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            message:error,
            success:false
        })
    }
}
