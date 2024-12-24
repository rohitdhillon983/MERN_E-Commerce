import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import Admin from "../pages/Admin";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import LoginWithOTP from "../pages/LoginWithOTP";
import ResetPassword from "../pages/ResetPassword";
import UpdateProfile from "../pages/updateProfile";
import Profile from "../pages/Profile";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SearchProduct from "../pages/SearchProduct";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/Signup",
                element:<Signup></Signup>
            },
            {
                path:"/forget-password",
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:"/reset-password/:id",
                element:<ResetPassword></ResetPassword>
            },

            {
                path:"/loginWithOTP",
                element:<LoginWithOTP></LoginWithOTP>
            },
            {
                path:"/profile/:id",
                element:<Profile></Profile>,
            },
            {
                path:"profile/update-profile",
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path:"/admin",
                element:<Admin></Admin>,
                children:[
                    {
                        path:"all-users",
                        element:<AllUsers></AllUsers>
                    },
                    {
                        path:"all-products",
                        element:<AllProducts></AllProducts>
                    }
                ]
            },
            
        ]
    }
])
export default router;