import React from 'react'
import dirtbike from "../assets/dirtbike1.png"
import { GoArrowUpRight } from 'react-icons/go'

function Location() {
    return (

        <div className='h-screen bg-black p-36 flex flex-col justify-between'>
            <div className='flex justify-center items-center relative'>
                <h1 className='text-[#edf42af9] text-8xl font-bold text-center'>
                    <span className='relative group'>
                        LET'S TAKE <br />
                        <span className='relative'>A RIDE</span>
                    </span>

                    {/* Arrow Circle */}
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                        <div className="relative group border p-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20 group-hover:scale-y-[2] group-hover:scale-x-[3]">
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 ease-in-out z-0"
                                style={{
                                    backgroundImage: `url('https://www.maptrove.ca/media/catalog/product/880x880/w/o/world-political-map-large-map.jpg')`
                                }}
                            />
                            <GoArrowUpRight className='text-white text-4xl z-0' />
                        </div>
                        <span className="text-white text-sm absolute bottom-[5px] left-[130%] transform -translate-x-1/2 font-semibold  bg-[#3b3f3b] rounded-xl  whitespace-nowrap m-3 p-2">
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
                    className='w-auto max-h-[60vh] object-contain mt-[-110px] z-10'
                />
            </div >
        </div >


    )
}

export default Location