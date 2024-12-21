// import React, { useEffect, useState } from 'react'
// import dirtbike from '../assets/dirtBike1.png'

// function HomePage() {

//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             const { clientX, clientY } = e;
//             setPosition({ x: clientX, y: clientY });
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     const transformX = (position.x - window.innerWidth / 2) / 20;
//     const transformY = (position.y - window.innerHeight / 2) / 20;

//     return (
//         <div className='h-screen bg-black p-16 flex flex-col justify-between'>
//             <div className='flex justify-center items-center'>
//                 <h1 className='text-[#37363733] text-9xl font-extrabold text-center relative group'>
//                     <span className='relative block'>
//                         RIDE FOR <br />
//                         <span className='relative z-10'>YOUR PASSION</span>
//                     </span>
//                 </h1>
//             </div>

//             <div className="flex justify-center"
//                 style={{
//                     transform: `translate(${transformX}px, ${transformY}px)`,
//                     transition: 'transform 0.1s ease-out',
//                 }}
//             >
//                 <img
//                     src={dirtbike}
//                     alt="dirtbike"
//                     className='w-auto max-h-[60vh] object-contain mt-[-110px]'
//                 />
//             </div>
//         </div>
//     )
// }

// export default HomePage;


import React, { useState, useEffect } from "react";
import dirtbike from '../assets/dirtBike.png';

// Glow Component
const GlowEffect = ({ position }) => (
    <div
        className="absolute pointer-events-none"
        style={{
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
            mixBlendMode: "screen",
            zIndex: -1,
            opacity: 0.8,
        }}
    >
        <div
            className="relative w-[250px] h-[250px] rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(255, 223, 0, 1), rgba(255, 223, 0, 0.9), rgba(255, 223, 0, 0.3), transparent)',
                filter: 'blur(80px) drop-shadow(0 0 50px rgba(255, 223, 0, 0.7)) drop-shadow(0 0 100px rgba(255, 223, 0, 0.4))',
                opacity: 0.9,
            }}
        />
    </div>
);

const Home = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [hoverLine, setHoverLine] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseMove = (e, line) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setHoverLine(line);
    };

    const getBikeTransform = ({ x, y }) => {
        const offsetX = (x / window.innerWidth) * 60 - 30;
        const offsetY = (y / window.innerHeight) * 30 - 15;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    return (
        <div
            className="relative bg-black w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8"
            onMouseMove={(e) => !isHovered && setPosition({ x: e.clientX, y: e.clientY })}
        >
            <div className="relative z-10 text-center mb-[-10px]">
                {/* First Text */}
                <div
                    className="relative text-silver/10 text-4xl sm:text-5xl md:text-9xl font-extrabold leading-none text text-[#37363733]"
                    onMouseMove={(e) => handleMouseMove(e, "first")}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    RIDE FOR
                    {isHovered && hoverLine === "first" && <GlowEffect position={position} />}
                </div>

                {/* Second Text */}
                <div
                    className="relative text-silver/10 text-4xl sm:text-5xl md:text-9xl font-extrabold leading-none mt-[-5px] text-[#43424333]"
                    onMouseMove={(e) => handleMouseMove(e, "second")}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                >
                    YOUR PASSION
                    {isHovered && hoverLine === "second" && <GlowEffect position={position} />}
                </div>
            </div>

            {/* Bike Image */}
            <img
                src={dirtbike}
                alt="dirt bike"
                className="z-10 w-[500px] sm:w-[600px] md:w-[700px] object-contain mt-[-15px]"
                style={{
                    transform: !isHovered ? getBikeTransform(position) : "none",
                    transition: "transform 0.1s ease-out",
                }}
            />
        </div>
    );
};

export default Home;
