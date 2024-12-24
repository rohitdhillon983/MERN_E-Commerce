exports.userLogout= async(req,res)=>{

    try {
        res.clearCookie("token")

        res.status(200).json({
            error : false,
            success : true,
            message : "Logged out successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            error : true,
            success : false,
            message : "not Logged out "
        })
    }
}