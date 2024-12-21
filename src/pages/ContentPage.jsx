import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Scrollbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);

    const bikeDetails = [
        {
            firstName: "Used",
            lastName: "Bikes",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
            image: "https://www.webbikeworld.com/wp-content/uploads/2023/03/wallpaperflare.com_wallpaper-12-6-scaled.jpg",
        },
        {
            firstName: "Genuine",
            lastName: "Accessories",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
            image: "https://bagorosperformance.com/wp-content/uploads/unknown_340029703_188735983934336_8487114117882746378_n.jpg",
        },
        {
            firstName: "Riding",
            lastName: "Gears",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Equipement_du_pilote_BMW_Motorrad_Etoile.jpg",
        },
        {
            firstName: "Bike",
            lastName: "Servicing",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim",
            image: "https://content.jdmagicbox.com/comp/def_content/motorcycle-repair-and-services-tvs/10-motorcycle-repair-and-services-tvs-9-h06rf.jpg",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className=" bg-[#2e2e2e] scroll-smooth flex items-center justify-center">
            <div className='bg-[#2e2e2e] h-5/6 w-11/12 flex'>
                {/* Sticky Sidebar */}
                <div className=" bg-black w-1/4 p-4 h-[calc(100vh-8rem)] sticky top-16 flex flex-col justify-between rounded-3xl">
                    <div className="text-center mb-4">
                        <h1 className="text-2xl font-semibold text-gray-400">
                            {bikeDetails[activeIndex].firstName}
                        </h1>
                        <h2 className="text-2xl font-semibold text-yellow-300">
                            {bikeDetails[activeIndex].lastName}
                        </h2>
                        <div className="h-[1px] bg-gray-400 mx-auto mt-16"></div>
                    </div>
                    <p className="text-white text-center mb-14">
                        {bikeDetails[activeIndex].content}
                    </p>
                    <button className="mt-4 text-white py-2 px-4 rounded-xl hover:bg-gray-900 border border-yellow-400">
                        GET INFO
                    </button>
                </div>

                {/* Scrollable Sections */}
                <div className="w-3/4 scroll-smooth pl-10">
                    {bikeDetails.map((data, index) => (
                        <section
                            ref={(el) => (sectionRefs.current[index] = el)}
                            key={index}
                            className="panel flex justify-center items-center sticky top-0 text-white h-screen"
                        >
                            <motion.div
                                initial={{ opacity: 0.5, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-[calc(100vh-8rem)] aspect-video overflow-hidden rounded-3xl"
                            >
                                <img
                                    src={data.image}
                                    alt={`${data.firstName} ${data.lastName}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Scrollbar;
