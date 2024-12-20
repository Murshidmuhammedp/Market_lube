import React from 'react'

function Quotes() {
    return (
        <div className='bg-black w-full h-screen  flex flex-col justify-center'>
            <div>
                <h1 className='text-white font-semibold text-5xl text-center'><span className='text-yellow-300 text-8xl'>“</span>Lorem ipsum dolor sit amet, consectetuer<br />
                    adipiscing elit, sed diam nonummy nibh euismod <br />
                    tincidunt ut laoreet dolore magna aliquam erat <br />
                    volutpat. Ut wisi enim ad minim veniam.”</h1>
            </div>
            <div>
                <h6 className='text-white text-center pt-9 text-2xl'>- Lorem ipsum</h6>
            </div>
        </div>
    )
}

export default Quotes