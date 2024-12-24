const mongoose = require("mongoose")
require("dotenv").config()

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL),
        console.log("DB connection successfully")
    } catch (error) {
        console.log("error to connect database",error)     
    }
}
module.exports =connectDB;
// export default connectDB;