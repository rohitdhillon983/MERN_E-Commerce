import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {
  const user = useSelector((state)=>state.user.user)
//   console.log(user)
  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
    <div className="flex flex-col">
        {/* <!-- Cover Image --> */}
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

        {/* <!-- Profile Image --> */}
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img src={("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" ) } alt="User Profile"
                    className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

            {/* <!-- FullName --> */}
            <h1
                className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                {user?.name}</h1>

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
                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">User Name</dt>
                                <dd className="text-lg font-semibold">{user.name}</dd>
                            </div>
                            
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                <dd className="text-lg font-semibold">{user.email}</dd>
                            </div>

                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                <dd className="text-lg font-semibold">+91 {user.phone}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">state</dt>
                                <dd className="text-lg font-semibold">{user.address === undefined ? <div>fb</div>:<div>{user.address.state}</div>}</dd>
                            </div>

                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">District</dt>
                                <dd className="text-lg font-semibold">{user.address === undefined ? <h1></h1>:<h1>{user.address.District}</h1>}</dd>
                            </div>

                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">City, Village, Town</dt>
                                <dd className="text-lg font-semibold">{user.address === undefined ? <h1></h1>:<h1>{user.address.city}</h1>}</dd>
                            </div>

                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">House No., Bulding No., Company Name</dt>
                                <dd className="text-lg font-semibold">{user.address === undefined ? <h1></h1>:<h1>{user.address.houseNo}</h1>}</dd>
                            </div>

                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Pin Code</dt>
                                <dd className="text-lg font-semibold">{user.address === undefined ? <h1></h1>:<h1 >{user.address.pinCode}</h1>}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div>
                  <Link to={"/profile/update-profile"}>
                    <div className='text-white text-[1.5rem] bg-red-600 py-3 flex justify-center border-2 border-red-600 transition-all hover:bg-transparent'>Update Details</div>
                  </Link>
                </div>
                
                <div className="my-10 lg:w-[70%] md:h-[14rem] xs:w-full xs:h-[10rem]">
                    <h1
                        className="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
                        My Location</h1>

                    {/* <!-- Location --> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
                        className="rounded-lg w-full h-full" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Profile
