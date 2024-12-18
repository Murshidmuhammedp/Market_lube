import React from 'react'
import dirtbike from "../assets/dirtbike1.png"

function Location() {
    return (
        <div className='h-screen bg-black p-36 flex flex-col justify-between'>
            <div className='flex justify-center items-center'>
                <h1 className='text-[#edf42af9] text-8xl font-bold text-center'>
                    <span className='relative group'>
                        LET'S TAKE <br />
                        <span className='relative z-10'>A RIDE</span>
                    </span>
                </h1>
            </div>

            {/* Image */}
            <div className="flex justify-center">
                <img
                    src={dirtbike}
                    alt="dirtbike"
                    className='w-auto max-h-[60vh] object-contain mt-[-110px] z-10'
                />
            </div>
        </div>
    )
}

export default Location