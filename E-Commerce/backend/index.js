const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
connectDB()
const router = require("./routes/index")
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","DELETE","PUT"],
    credentials:true,
}))
app.use(cookieParser())

app.use(express.json());
app.use("/api",router)

const Port = 8080 || process.env.Port

app.listen(Port,()=>{
    console.log(`server is running at ${Port}`)
})