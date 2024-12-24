
const userModel = require("../models/userModels")

async function allUsers(req,res){
    try{
        // console.log("user id all Users",req.user._Id)

        const allUsers = await userModel.find()
        
        res.json({
            message : "All User ",
            data : allUsers,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allUsers