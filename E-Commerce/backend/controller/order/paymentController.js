const stripe = require("../../config/stripe")
const userModel = require("../../models/userModels")

const paymentController = async(req,res)=>{
    try {
        const { cartItems } = req.body

        const user = await userModel.findOne({_id:req.user._id})

        const params = {
            submit_type :"pay",
            mode:"payment",
            payment_method_types:['card'],
            billing_address_collection : "auto",
            shipping_options:[
                {
                    shipping_rate :"hjfgghvf"
                }
            ],
            customer_email : user.email,
            line_items : cartItems.map((item,index)=>{
                return{
                    price_data :{
                        currency :"inr",
                        product_data :{
                            name : item.productId.productName,
                            images: item.productId.productImage,
                            metadata :{
                                productId:item.productId._id
                            }
                        },
                        unit_amount : item.productId.sellingPrice*100
                    },
                    adjustable_quantity :{
                        enabled:true,
                        minimum :1
                    },
                    quantity : item.quantity
                }
            }),
            success_url : "http://localhost:5173/success",
            cancle_url : "http://localhost:5173/cancel"
        }

        const session = await stripe.checkout.sessions.create(params)

    } catch (error) {
        res.json({
            message : error.message || error,
            error:true,
            success :false
        })
    }
}

module.exports = paymentController;