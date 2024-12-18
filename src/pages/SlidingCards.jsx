const cards = [
    {
        image: "https://w0.peakpx.com/wallpaper/304/871/HD-wallpaper-kawasaki-ninja-h2r-bike-black-bike-parked-black-bike-parked-bike.jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://i.pinimg.com/originals/79/17/45/7917459fb6240903488549d4ecd5e924.jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://images.pexels.com/photos/564094/pexels-photo-564094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://images.pexels.com/photos/20736680/pexels-photo-20736680.jpeg?cs=srgb&dl=pexels-helin-gezer-903013644-20736680.jpg&fm=jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://e0.pxfuel.com/wallpapers/666/138/desktop-wallpaper-sports-races-motorcycles-motorcyclist-motorcycle-bike-racer-thumbnail.jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://w0.peakpx.com/wallpaper/287/515/HD-wallpaper-ducati-1199cc-bike-bike-bike-racing-bike-red-sports-bike-new-bike-superbike.jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://w0.peakpx.com/wallpaper/622/213/HD-wallpaper-bike-racer-race-racing-bike.jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://i.pinimg.com/736x/35/73/27/357327fa2b8c29109137aef514952a14.jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }, {
        image: "https://e0.pxfuel.com/wallpapers/506/149/desktop-wallpaper-motorcycle-iphone-superbike.jpg",
        text: "Lorem ipsum dolor sit amet, Ut wisi enim ad min."
    }
];

import React, { useRef } from 'react';

const SlidingCards = () => {

    const sliderRef = useRef(null);


    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center bg-black">
            <h1 className="text-3xl font-semibold text-white ml-[-1250px]"> <span className='text-yellow-400'>Guides</span> for you</h1>
            <div
                ref={sliderRef}
                className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4 w-full"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-1/4 p-8"
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        <div className="h-[500px] w-full hover:scale-105 transform transition-all duration-500 relative">
                            <img
                                src={card.image}
                                alt={card}
                                className="w-full h-full object-cover cursor-pointer"
                            />

                            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white bg-black bg-opacity-40 px-3 py-1 rounded">
                                {(() => {
                                    const words = card.text.split(' ');
                                    const firstLine = words.slice(0, 3).join(' ');
                                    const secondLine = words.slice(3, 6).join(' ');
                                    const thirdLine = words.slice(6).join(' ');
                                    return (
                                        <>
                                            <p>{firstLine}</p>
                                            <p className="text-yellow-500">{secondLine}</p>
                                            <p>{thirdLine}</p>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-3xl font-semibold text-white ml-[-1180px]"> <span className='text-yellow-400'>Testimonials</span>  for you</h2>
        </div>
    );
};

export default SlidingCards;