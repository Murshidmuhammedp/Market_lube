import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function BrandLogos() {

    const logos = [
        "https://static.vecteezy.com/system/resources/previews/020/336/157/non_2x/ktm-logo-ktm-icon-free-free-vector.jpg",
        "https://aapli.in/static/media/logo.b1eb728c6e18cd4e7888.webp",
        "https://static.vecteezy.com/system/resources/previews/020/190/461/non_2x/honda-logo-honda-icon-free-free-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/020/336/144/non_2x/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/1e3602164499917.63f797d39c88f.jpg",
        "https://wallpapers.com/images/hd/suzuki-logo-brand-identity-emzqt776fgsihboo-2.jpg",
        "https://cdn-0.motorcycle-logos.com/images/New-BMW-Logo-400x341.jpg?ezimgfmt=rs:396x338/rscb5/ngcb5/notWebP",
        "https://c.ndtvimg.com/2022-01/65c8jqng_bike_625x300_14_January_22.jpg",
        "https://i.pinimg.com/originals/71/ed/7e/71ed7e9574fddb0cc9134ce433ebfdc0.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrMae1mEhTpW4HDsErIE3ddaO89_GSwGNfQ&s"
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className='w-full bg-black h-96 flex items-center'>
            <div className=' w-full h-28 flex items-center justify-center'>
                <div className='h-full  w-1/3 flex items-center justify-center '>
                    <h1 className='text-white font-normal text-xl'>Featuring worlds top <span className='text-yellow-400'>brands</span>  for you</h1>
                </div>
                <div className=' h-full w-3/5'>
                    <Slider {...settings}>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="hover:scale-105 transform transition-all duration-500 relative">
                                <img
                                    src={logo}
                                    alt={logo}
                                    className="w-24 h-24  cursor-pointer"
                                />
                            </div>
                        ))
                        }
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default BrandLogos