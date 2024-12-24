const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profileImg:{
        type:String,
    },
    phone:{
        type:Number,
        min:10,
    },
    address:{
        state:{type:String},
        distic:{type:String},
        city:{type:String},
        houseNo:{type:String},
        pinCode:{type:Number}
    },
    token: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
    role:{
        type:String,
    }
},{
    timestamps:true
})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel;