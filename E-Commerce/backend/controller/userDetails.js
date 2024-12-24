const userModel = require("../models/userModels");

exports.userDetailsController= async(req,res,next)=>{
    try {
        const _id = req.user._id;

        const user = await userModel.findById({_id:_id})

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })
        
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error,
            next
        })
    }
}
