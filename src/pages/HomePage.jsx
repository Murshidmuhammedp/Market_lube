import React from 'react'
import dirtbike from '../assets/dirtBike1.png'

function HomePage() {
    return (
        <div className='h-screen bg-black p-16 flex flex-col justify-between'>
            <div className='flex justify-center items-center'>
                <h1 className='text-[#37363733] text-9xl font-extrabold text-center'>
                    <span className='relative group'>
                        RIDE FOR <br />
                        <span className='relative z-10'>YOUR PASSION</span>
                    </span>
                </h1>
            </div>

            {/* Image */}
            <div className="flex justify-center">
                <img
                    src={dirtbike}
                    alt="dirtbike"
                    className='w-auto max-h-[60vh] object-contain mt-[-80px] hover:animate-float'
                />
            </div>
        </div>
    )
}

export default HomePage