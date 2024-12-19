import React, { useEffect, useState } from 'react'

const categories = [
    {
        firstName: "Used",
        lastName: "Bikes",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
        image: "https://www.webbikeworld.com/wp-content/uploads/2023/03/wallpaperflare.com_wallpaper-12-6-scaled.jpg"
    }, {
        firstName: "Genuine",
        lastName: "Accessories",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
        image: "https://bagorosperformance.com/wp-content/uploads/unknown_340029703_188735983934336_8487114117882746378_n.jpg",
    }, {
        firstName: "Riding",
        lastName: "Gears",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Equipement_du_pilote_BMW_Motorrad_Etoile.jpg",
    }, {
        firstName: "Bike",
        lastName: "Servicing",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
        image: "https://content.jdmagicbox.com/comp/def_content/motorcycle-repair-and-services-tvs/10-motorcycle-repair-and-services-tvs-9-h06rf.jpg"
    }
]

function ContentPage() {

    return (
        <div className='bg-[#2e2e2e] w-full h-screen flex justify-center items-center'>
            {/* {categories.map((category, index) => ( */}
            <div className='bg-[#2e2e2e] h-5/6 w-11/12 flex'>
                <div className='bg-black w-1/4 p-4 flex flex-col justify-between rounded-3xl'>
                    <div className='text-center mb-4'>
                        <h1 className="text-2xl font-semibold text-gray-400">Used</h1>
                        <h2 className='text-2xl font-semibold text-yellow-300'>Bikes</h2>
                        <div className="h-[1px] bg-gray-400 mx-auto mt-16"></div>
                    </div>
                    <p className="text-white text-center mb-14">
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim"
                        {/* {category.content} */}
                    </p>

                    <button className="mt-4 text-white py-2 px-4 rounded-xl  hover:bg-gray-900 border border-yellow-400">
                        GET INFO
                    </button>

                </div>

                <div className='w-3/4 flex justify-center items-center pl-10'>
                    <img
                        src="https://www.webbikeworld.com/wp-content/uploads/2023/03/wallpaperflare.com_wallpaper-12-6-scaled.jpg"
                        // {category.image}
                    alt="Sample Image"
                    className="rounded-3xl object-cover w-full h-full"
                    />
                </div>
            </div>
            {/* ))} */}
        </div>
    )
}

export default ContentPage

// import React, { useState, useEffect } from 'react';


// function ContentPage() {
//     const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

//     const handleScroll = () => {
//         const scrollPosition = window.scrollY; // Get the current scroll position
//         const categoryHeight = window.innerHeight; // Height of the viewport
//         const index = Math.floor(scrollPosition / categoryHeight); // Determine which category to show

//         // Ensure the index is within valid bounds
//         const validIndex = Math.min(Math.max(index, 0), categories.length - 1);
//         setCurrentCategoryIndex(validIndex); // Update the index based on the scroll position
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll); // Add scroll event listener
//         return () => {
//             window.removeEventListener('scroll', handleScroll); // Clean up event listener
//         };
//     }, []);

//     // Ensure currentCategoryIndex is always valid and doesn't access an undefined category
//     const category = categories[currentCategoryIndex] || categories[0];

//     return (
//         <div className='bg-[#2e2e2e] w-full'>
//         <div className="sticky top-0 flex justify-center items-center bg-[#2e2e2e]">
//             {/* Sticky Frame */}
//             <div className="bg-black w-1/4 p-4 flex flex-col justify-between rounded-3xl">
//                 <div className='text-center mb-4'>
//                     <h1 className="text-2xl font-semibold text-gray-400">{category.firstName}</h1>
//                     <h2 className='text-2xl font-semibold text-yellow-300'>{category.lastName}</h2>
//                     <div className="h-[1px] bg-gray-400 mx-auto mt-16"></div>
//                 </div>
//                 <p className="text-white text-center mb-14">{category.content}</p>
//                 <button className="mt-4 text-white py-2 px-4 rounded-xl hover:bg-gray-900 border border-yellow-400">
//                     GET INFO
//                 </button>
//             </div>
//         </div>

//         {/* Scrollable Content for Images */}
//         <div className="h-screen flex justify-center items-center bg-[#2e2e2e]">
//             <img
//                 src={category.image}
//                 alt="Current Category"
//                 className="rounded-3xl object-cover w-full h-full"
//             />
//         </div>

//         {/* Repeat content area for all categories to allow scrolling */}
//         <div className="h-screen flex justify-center items-center bg-[#2e2e2e]">
//             <img
//                 src={categories[1].image}
//                 alt="Category 2"
//                 className="rounded-3xl object-cover w-full h-full"
//             />
//         </div>

//         <div className="h-screen flex justify-center items-center bg-[#2e2e2e]">
//             <img
//                 src={categories[2].image}
//                 alt="Category 3"
//                 className="rounded-3xl object-cover w-full h-full"
//             />
//         </div>

//         <div className="h-screen flex justify-center items-center bg-[#2e2e2e]">
//             <img
//                 src={categories[3].image}
//                 alt="Category 4"
//                 className="rounded-3xl object-cover w-full h-full"
//             />
//         </div>
//     </div>
// );
// }

// export default ContentPage;