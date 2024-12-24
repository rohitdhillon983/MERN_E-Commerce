import React, { useState } from 'react'
import { use } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SummaryApi from '../common/commonRoutes'
import { toast } from 'react-toastify'

const UpdateProfile = () => {
  const user = useSelector((state)=>state.user.user)

  const[data,setData]=useState({
    _id:user._id,
    name:"",
    email:"",
    phone:"",
    state:"",
    District:"",
    city:"",
    houseNo:"",
    pinCode:""
  })
  const handleOnChange=(e)=>{
    const { name, value} = e.target

      setData((preve)=>{
        return{
          ...preve,
          [name]  : value
        }
    })}

  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    
    const response = await fetch(SummaryApi.updateProfile.url,{
      method : SummaryApi.updateProfile.method,
      credentials : 'include',
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const responseData = await response.json()

    if(responseData.success){
        toast.success(responseData?.message)
    }


    if(responseData.error){
      toast.error(responseData?.message)
    }

  }
    
//   console.log(user)
  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
    <div className="flex flex-col">
        {/* <!-- Cover Image --> */}
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

        {/* <!-- Profile Image --> */}
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img src={user.ProfileImg ===""?(user.ProfileImg):( "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" ) } alt="User Profile"
                    className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

            {/* <!-- FullName --> */}
            <h1
                className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                {user.name}</h1>

        </div>

        <div
            className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem
                veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore
                similique fugiat dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic
                eligendi vitae animi nam in, est earum culpa illum aliquam.</p>


            {/* <!-- Detail --> */}
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div className="flex flex-col pb-1">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">User Name</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none" placeholder={user.name} name='name' value={data.name} onChange={handleOnChange}/>
                            </div>
                            
                            <div className="flex flex-col py-2">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none" placeholder={user.email} name='email' value={data.value} onChange={handleOnChange}/>
                            </div>

                            <div className="flex flex-col py-2">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none" placeholder={user.phone} name='phone' value={data.phone} onChange={handleOnChange}/>
                            </div>
                        </dl>
                    </div>
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div className="flex flex-col pb-1">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">state</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none placeholder-[#bab8b826]" placeholder="Haryana" name='state' value={data.state} onChange={handleOnChange}/>
                            </div>

                            <div className="flex flex-col py-2">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">District</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none placeholder-[#bab8b826]" placeholder="Kaithal" name='District' value={data.District} onChange={handleOnChange}/></div>

                            <div className="flex flex-col pt-2">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">City, Village, Town</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none placeholder-[#bab8b826]" placeholder="Kaithal" name='city' value={data.city} onChange={handleOnChange}/></div>

                            <div className="flex flex-col pt-2">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">House No., Bulding No., Company Name</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none placeholder-[#bab8b826]" placeholder="1234,gali no. 3, near Govt. hoapital" name='houseNo' value={data.houseNo} onChange={handleOnChange}/></div>

                            <div className="flex flex-col py-2">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Pin Code</dt>
                                <input className="text-lg font-semibold p-1 bg-transparent outline-none placeholder-[#bab8b826]" placeholder="111000" name='pinCode' value={data.pinCode} onChange={handleOnChange}/></div>
                        </dl>
                    </div>
                </div>

                <div>
                  <Link to={"update-profile"}>
                    <div onClick={handleOnSubmit} className='text-white text-[1.5rem] bg-red-600 py-3 flex justify-center border-2 border-red-600 transition-all hover:bg-transparent'>Update now</div>
                  </Link>
                </div>
                        
            </div>
        </div>
    </div>
</section>

  )
}

export default UpdateProfile
