import React from 'react'
import dirtbike from "../assets/dirtbike1.png"
import { GoArrowUpRight } from 'react-icons/go'

function Location() {
    return (

        <div className='h-screen bg-black p-24 flex flex-col justify-between'>
            <div className='flex justify-center items-center relative '>
                <h1 className='text-[#edf42af9] text-9xl font-bold text-center'>
                    <span className='relative group'>
                        LET'S TAKE <br />
                        <span className='relative'>A RIDE</span>
                    </span>

                    {/* Arrow Circle */}
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                        <div className="relative group border p-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20 group-hover:scale-y-[2] group-hover:scale-x-[3]">
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-x-[2] group-hover:scale-y-[2] transition-all duration-300 ease-in-out z-0"
                                style={{
                                    backgroundImage: `url('https://cdn.prod.website-files.com/65a12c5f07c5850dac0dce55/65a12c5f07c5850dac0dce8a_map-p-500.webp ')`
                                }}
                            />
                            <GoArrowUpRight className='text-white text-4xl hover:text-black z-10 transition-transform duration-500 group-hover:scale-125 group-hover:text-black' />
                        </div>
                        <span className="text-white text-base absolute bottom-[5px] left-[130%] transform -translate-x-1/2 font-semibold  bg-[#2a2a2a] rounded-3xl  whitespace-nowrap m-4 p-2 z-20 h-13 w-28">
                            Locate <br /> the shop
                        </span>

                    </div>
                </h1>
            </div >

            {/* Image */}
            < div className="flex justify-center" >
                <img
                    src={dirtbike}
                    alt="dirtbike"
                    className='w-auto max-h-[65vh] object-contain mt-[-130px] z-10'
                />
            </div >
        </div >


    )
}

export default Location