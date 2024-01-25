import { useState } from "react"

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState(false);

    function handleLanguage() {
        setLanguage(!language)
    }

    function handleClick() {
        setOpen(!open);
    }

    return (
        <div>
            <div className="text-white  bg-black flex justify-between items-center py-4 relative ">
                <div className="flex justify-between gap-10 items-center px-20 relative">
                    <span className="text-2xl">Uber</span>
                    <div className="flex items-center justify-center hover:bg-slate-800 transition-all ease-in duration-200 hover:px-[10px] px-[10px] py-[6px] hover:rounded-2xl" onClick={handleClick}>
                        <span className="px-2">Company</span>
                        {open ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 font-semi-bold">
                            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                        }

                        {open ? <div className="absolute top-[52px] left-48 text-gray-500 bg-white p-2 rounded-b-xl shadow-md ">
                            <ul className="">
                                <li className=" hover:bg-gray-200 rounded-sm">About Us</li>
                                <li className=" hover:bg-gray-200 rounded-sm">Our offering</li>
                                <li className=" hover:bg-gray-200 rounded-sm">How Uber works</li>
                                <li className=" hover:bg-gray-200 rounded-sm">Global citizenship</li>
                                <li className=" hover:bg-gray-200 rounded-sm">Newsroom</li>
                                <li className=" hover:bg-gray-200 rounded-sm">Investor Relaions</li>
                                <li className=" hover:bg-gray-200 rounded-sm">Blog</li>
                                <li className=" hover:bg-gray-200 rounded-sm">Careers</li>
                            </ul>
                        </div>
                            : null}
                    </div>


                    <span className="hover:bg-slate-800 transition-all ease-in duration-200 hover:px-[10px] px-[10px] py-[6px] hover:rounded-2xl">Safety</span>
                    <span className="hover:bg-slate-800 transition-all ease-in duration-200 hover:px-[10px] px-[10px] py-[6px] hover:rounded-2xl">Help</span>
                </div>

                <div className="flex justify-between items-center gap-4 px-32">

                    <div className="flex justify-between hover:bg-slate-800 transition-all ease-in duration-200 hover:px-[10px] px-[10px] py-[6px] hover:rounded-2xl " onClick={handleLanguage}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <span className="">EN</span>

                        {language ? <div>
                            <div className="absolute transition-all ease-in-out duration-600 w-full left-0 top-20 shadow-md h-[620px] bg-white text-black">
                                <div>
                                    <div className="flex flex-row justify-between mx-32 text-3xl items-center py-20 font-semibold">
                                        <h1 >Select your preferred language</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        </svg>

                                    </div>


                                </div>
                                <div className="grid grid-cols-4 gap-2 text-2xl px-16">
                                    <div className="text-center p-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer">বাংলা</div>
                                    <div className="text-center p-4 bg-gray-200 rounded-xl cursor-pointer">English</div>
                                    <div className="text-center p-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer">हिन्दी</div>
                                    <div className="text-center p-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer">मराठी</div>
                                    <div className="text-center p-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer">ಕನ್ನಡ</div>
                                    <div className="text-center p-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer">தமிழ்</div>
                                    <div className="text-center p-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer">اردو</div>
                                    <div className="text-center p-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer">తెలుగు</div>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>
                            : null}

                    </div>

                    <div className="flex justify-between  hover:bg-slate-800 transition-all ease-in duration-200 hover:px-[10px] px-[10px] py-[6px] hover:rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                        <span>Products</span>
                    </div>

                    <span className=" hover:bg-slate-800 transition-all ease-in duration-200 hover:px-[10px] px-[10px] py-[6px] hover:rounded-2xl">Log in</span>
                    <button className="bg-white rounded-2xl px-2 py-1 hover:bg-slate-300 font-medium text-black">Sign Up</button>
                </div>
            </div>
        </div>
    )
}