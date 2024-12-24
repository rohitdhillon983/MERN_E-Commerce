import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SummaryApi from '../common/commonRoutes'
import { toast } from 'react-toastify'

const ResetPassword = () => {
    const token = useParams()

    const [data,setData]=useState({
        password:"",
        confirmPassword:"",
        token:token
    })
    console.log(token)
    const navigateTo = useNavigate()
    const handleOnChange =(e)=>{
        const {name,value}=e.target
    
        setData((preve)=>{
            return{
                ...preve,
                [name]:value 
            }
        })
    }
    
    const handleOnSubmit= async(e)=>{
        e.preventDefault()
    
        const dataResponse = await fetch(`http://localhost:8080/api/reset-password/${token}`,{
          method:"put",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(data)
        })
        const dataApi = await dataResponse.json()
        console.log(dataApi)
        if(dataApi.success){
          toast.success(dataApi.message)
          navigateTo("/login")
        }
        if(dataApi.error){
          toast.error("user not  found")
        }
    }
  return (
    <div>
        <div className="flex h-screen">
                {/* <!-- Left Pane --> */}
            <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                <div className="max-w-md text-center">
                    <img src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7896.jpg" alt="" />
                </div>
            </div>
                {/* <!-- Right Pane --> */}
            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">Reset Password</h1>
                    <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time access and free </h1>

                    <form onSubmit={handleOnSubmit} method="POST" className="space-y-4">
                        {/* <!-- Your form elements go here --> */}
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" value={data.password} onChange={handleOnChange}  id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                        </div>
                        <div>
                            <label for="confirmPassword" className="block text-sm font-medium text-gray-700">confirm Password</label>
                            <input type="password" value={data.confirmPassword} onChange={handleOnChange}  id="confirmPassword" name="confirmPassword" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                        </div>
                        <div>
                            <button type="submit" onClick={handleOnSubmit} className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Update</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword
