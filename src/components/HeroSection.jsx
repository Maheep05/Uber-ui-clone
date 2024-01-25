import img from '../assets/uber-1.webp'
import img1 from '../assets/uber-2.webp'
import img2 from '../assets/Uber-3.webp'
import img3 from '../assets/Uber-4.webp'
import img4 from '../assets/uberdown.webp'
import img5 from '../assets/uberdriver.webp'

export function HeroSection() {
    return (
        <div>
            <div className='flex justify-center bg-black text-white'>
                <div className=' flex gap-20 mx-[100px] p-4'>
                    {/* Content */}
                    <div className='flex flex-col py-40  '>
                        <span className='text-6xl font-bold'>Go anywhere with Uber</span>
                        <h1 className='py-4 text-lg'>Request a ride, hop in, and go.</h1>
                        <div className='flex justify-between items-center p-1 rounded-lg w-[360px] bg-white text-black'>
                            <div className='flex items-center p-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z" clip-rule="evenodd" />
                                </svg>
                                <input type="text" placeholder="Enter Location" className='px-2 outline-none w-80' />
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                        </div>

                        <div className='flex justify-between items-center p-1 my-4 rounded-lg w-[360px] bg-white text-black'>
                            <div className='flex items-center p-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z" clip-rule="evenodd" />
                                </svg>
                                <input type="text" placeholder="Enter Destination" className='px-2 outline-none w-80' />
                            </div>
                        </div>

                        <button className='rounded-lg text-lg font-semibold items-center justify-center text-black bg-white cursour-pointer flex p-2.5 w-32'>See Prices</button>

                    </div>
                    <div class="absolute top-[450px] left-[135px] h-16 border-l border-white"></div>
                    {/* Photo */}
                    <div>
                        <img src={img} alt="" className='h-[700px] w-[600px] m-16' />
                    </div>
                </div>
            </div>

            <div className='flex p-36 gap-32'>
                {/* img */}
                <div>
                    <img src={img1} alt="" className='w-[1300px] h-[500px]' />
                </div>

                {/* content */}
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-gray-800 text-6xl font-semibold'>Drive when you want, make what you need</p>
                        <p className='text-md '>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
                        <div className='flex items-center gap-6 py-4'>
                            <button className='px-6 py-3 rounded-xl hover:bg-gray-700 bg-black text-white'>Get Started</button>
                            <div className="group text-black transition-all duration-300 ease-in-out">
                                <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                    Already have an account? Sign in
                                </span>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <div className='flex px-36 gap-32'>


                {/* content */}
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-gray-800 text-6xl font-semibold'>The Uber you know, reimagined for business</p>
                        <p className='text-md '>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                        <div className='flex items-center gap-6 py-4'>
                            <button className='px-6 py-3 rounded-xl hover:bg-gray-700 bg-black text-white'>Get Started</button>
                            <div className="group text-black transition-all duration-300 ease-in-out">
                                <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                    Check out our solutions
                                </span>
                            </div>



                        </div>
                    </div>
                </div>

                {/* img */}
                <div>
                    <img src={img2} alt="" className='w-[1400px] h-[600px]' />
                </div>
            </div>

            <div className='flex p-36 gap-32'>
                {/* img */}
                <div>
                    <img src={img3} alt="" className='w-[800px] h-[600px]' />
                </div>

                {/* content */}
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col gap-4 px-9'>
                        <p className='text-gray-800 text-4xl font-bold'>Make money by renting out your car</p>
                        <p className='text-md '>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
                        <div className='flex items-center gap-6 py-4'>
                            <button className='px-6 py-3 rounded-xl hover:bg-gray-700 bg-black text-white'>Get Started</button>




                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 '>
                <div className='text-4xl pt-20 px-[140px]  font-bold'>
                    <p>It's easier in the apps</p>
                </div>

                <div className='flex justify-center gap-24 p-10'>
                    <div className='flex items-center gap-6 py-6 px-14 bg-white group cursor-pointer hover:cursor-pointer'>
                        <img src={img5} alt="" className='h-40 w-40' />
                        <div>
                            <p>Download the Uber app</p>
                            <p>Scan the download</p>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 transition-transform duration-300 ease-in-out transform group-hover:translate-x-4"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className='flex items-center gap-6 py-6 px-14 bg-white group cursor-pointer hover:cursor-pointer'>
                        <img src={img5} alt="" className='h-40 w-40' />
                        <div>
                            <p>Download the Driver app</p>
                            <p>Scan the download</p>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 transition-transform duration-300 ease-in-out transform group-hover:translate-x-4"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>

                </div>

            </div>
        </div>
    )
}