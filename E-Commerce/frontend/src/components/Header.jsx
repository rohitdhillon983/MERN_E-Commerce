import React, { useContext } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate} from 'react-router-dom';
import SummaryApi from '../common/commonRoutes';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice';
import Context from '../context';

function Header() {
    const user = useSelector((state)=>state.user.user);
    const context = useContext(Context)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // console.log(user)

    const handleLogout=async()=>{
        const fetchData = await fetch(SummaryApi.logout.url,{
            method:SummaryApi.logout.method,
            credentials:"include"
        })

        const data = await fetchData.json()

        if(data.success){
            toast.success(data.success)
            dispatch(setUserDetails(null))
            navigate("/")
        }
        if(data.error){
            toast.error(data.error)
        }
    }
    const handleSearch=(e)=>{
        const {value}= e.target

        if (value) {
            navigate(`/search?q=${value}`)
        }else{
            navigate("/search")
        }
    }
  return (
    <header className='h-16 shadow-md z-40 bg-white fixed w-full'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                    <Logo></Logo>
                </Link>
            </div>
            <div className='flex items-center w-full justify-between max-w-sm border rounded-full pl-3'>
                <input type="text" placeholder='serch product here.....' className='w-full outline-none' onChange={handleSearch}/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full'>
                    <FaSearch />
                </div>
            </div>
            <div className='flex justify-center items-center text-3xl gap-7 cursor-pointer'>
                <Link to={"/cart"} className='flex items-center justify-center relative text-[#333]'><FaCartShopping />
                    <p className='text-sm flex items-center text-center justify-center text-white absolute -top-2 left-5 w-5 h-5 bg-red-600 rounded-full'>{context?.cartProductCount}</p>
                </Link>

                <div className='text-[#333] group'><FaUser />
                    <div className="invisible absolute right-[0%] z-10 translate-y-[20%] bg-[#77777772]
                                            flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-800 optional:0 transition-all
                                            duration-200 group-hover:visible group-hover:opacity-100 lg:w-[200px]">
                        <div className="absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6
                                        rotate-45 rounded bg-richblack-5">
                        </div>

                        <div className='lg:w-full'>
                            {
                            user?._id ?(
                                <Link to={`/profile/${user._id}`} className=' text-2xl lg:w-full'>
                                   <li className='w-full border-[2px] list-none relative -top-1 text-xl text-white px-4 py-1 rounded-full transition-all hover:border-[2px] hover:border-red-600 hover:bg-white hover:text-red-600 '> Profile
                               </li> </Link>
                                ):(
                                    
                                    <span></span>
                                )
                            }            
                        </div>

                        <div className='lg:w-full mt-2'>
                            {
                            user?.role ==="ADMIN" ?(
                                <Link to={`/admin`} className=' text-2xl lg:w-full'>
                                   <li className='w-full border-[2px] list-none relative -top-1 text-xl text-white px-4 py-1 rounded-full transition-all hover:border-[2px] hover:border-red-600 hover:bg-white hover:text-red-600 '> Dashboard
                               </li> </Link>
                                ):(
                                    
                                    <span></span>
                                )
                            }            
                        </div>

                        <div className='w-full mt-2'>
                            {
                            user?._id ?(
                                <button onClick={handleLogout} className='bg-red-600 w-full relative flex justify-start border-red-600 -top-1 text-xl text-white px-4 py-1 rounded-full transition-all hover:border-[2px] hover:border-red-600 hover:bg-white hover:text-red-600 '>
                                    Logout
                                </button>
                            ):(
                                 <Link to={"/login"}> <li className='w-full list-none bg-red-600 relative px-4 py-1 -top-1 text-xl text-white rounded-full transition-all hover:border-[2px] hover:border-red-600 hover:bg-white hover:text-red-600 '>
                                    <span className=''>Login</span>
                                </li></Link>
                            )
                            }            
                        </div>
                    </div>
                </div>
                
            </div>            
                
        </div>
    </header>
  )
}

export default Header
