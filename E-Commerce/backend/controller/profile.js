const userModel = require("../models/userModels")


exports.profile = async(req,res)=>{
    try {
        const {_id,name,email,phone,state,distic,city,houseNo,pinCode}=req.body

        const updateData = await userModel.findByIdAndUpdate({_id:_id},{name,email,phone,address:{state,distic,city,houseNo,pinCode}})
        res.status(200).json({
            success:true,
            message:"update successfully",
            data:updateData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}