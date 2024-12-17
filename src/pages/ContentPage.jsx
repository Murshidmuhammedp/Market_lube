import React from 'react'

function ContentPage() {
    return (
        <div className='bg-[#2e2e2e] w-full h-screen flex justify-center items-center'>
            <div className='bg-[#2e2e2e] h-5/6 w-11/12 flex'>
                <div className='bg-black w-1/4 p-4 flex flex-col justify-between rounded-3xl'>
                    <div className='text-center mb-4'>
                        <h1 className="text-2xl font-semibold text-gray-400">Used</h1>
                            <h2 className='text-2xl font-semibold text-yellow-300'>Bikes</h2>
                        <div className="h-[1px] bg-gray-400 mx-auto mt-16"></div>
                    </div>
                    <p className="text-white text-center mb-14">
                        Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim
                    </p>
                   
                    <button className="mt-4 text-white py-2 px-4 rounded-xl  hover:bg-gray-900 border border-yellow-400">
                        GET INFO
                    </button>

                </div>

                <div className='w-3/4 flex justify-center items-center pl-10'>
                    <img
                        src="https://www.webbikeworld.com/wp-content/uploads/2023/03/wallpaperflare.com_wallpaper-12-6-scaled.jpg"
                        alt="Sample Image"
                        className="rounded-3xl object-cover w-full h-full"
                    />
                </div>
            </div>

        </div>
    )
}

export default ContentPage