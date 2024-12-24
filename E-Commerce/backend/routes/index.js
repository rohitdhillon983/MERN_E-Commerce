const express = require("express")
const {userSignUpController } = require("../controller/userSignUp");
const {userSignInController } = require("../controller/userSignIn");
const { userDetailsController } = require("../controller/userDetails");
const { authToken } = require("../middleware/authToken");
const { userLogout } = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const { forgetPassword, resetPassword } = require("../controller/forgetPassword");
const updateUserRole = require("../controller/updateUserRole");
const { profile } = require("../controller/profile");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProduct");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/addToCartController");
const countAddToCartProduct = require("../controller/countAddToCartProduct");
const addToCartViewProduct = require("../controller/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");
const paymentController = require("../controller/order/paymentController");

const router = express.Router()

router.post("/signup",userSignUpController);
router.post("/login",userSignInController);
router.get("/user-details",authToken,userDetailsController);
router.get("/logout",userLogout);
router.post("/forgetPassword",forgetPassword);
router.put("/reset-password/:token",resetPassword)
router.post("/update-profile",profile)

// admin panel
router.get("/all-user",authToken,allUsers);
router.post("/update-user-role",authToken,updateUserRole)

// product
router.post("/upload-product",authToken,UploadProductController);
router.get("/get-product",getProductController);
router.post("/update-product",updateProductController);
router.get("/get-categoryProduct",getCategoryProduct);
router.post("/category-product",getCategoryWiseProduct);
router.post("/product-details",getProductDetails);
router.get("/search",searchProduct);
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken,addToCartController);
router.get("/countAddToCartProduct",authToken,countAddToCartProduct);
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

// payment and order 
router.post("/checkout",authToken,paymentController)

module.exports = router