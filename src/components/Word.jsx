import React, { useEffect } from "react";

const TextOpacityScroll = () => {
    useEffect(() => {
        const textOpacityScroll = () => {
            const items = document.querySelectorAll(".text-section");
            if (items.length) {
                items.forEach((item) => {
                    const itemValue = item.querySelector(".text-section_value");
                    const itemMask = item.querySelector(".text-section_mask");
                    const itemSpeed = +itemValue.dataset.textSpeed || 500;
                    const itemOpacity = +itemValue.dataset.textOpacity || 0.2;

                    itemValue.innerHTML = itemValue.innerText.replace(
                        /([A-Za-z0-9'-,.&!?+<>/]+)/g,
                        `<span style="transition: opacity ${itemSpeed}ms;opacity:${itemOpacity};">$1</span>`
                    );

                    const handleScroll = () => {
                        const maskPosition =
                            itemMask.getBoundingClientRect().top - window.innerHeight;
                        const itemWay =
                            (Math.abs(maskPosition) /
                                (window.innerHeight + itemMask.offsetHeight)) *
                            100;
                        const itemWords = itemValue.querySelectorAll("span");
                        const currentWord =
                            maskPosition <= 0
                                ? Math.floor((itemWords.length / 100) * itemWay)
                                : -1;

                        addOpacity(itemWords, currentWord);
                    };

                    const addOpacity = (itemWords, currentWord) => {
                        itemWords.forEach((itemWord, index) => {
                            itemWord.style.opacity = itemOpacity;
                            if (index <= currentWord) {
                                itemWord.style.opacity = 1;
                            }
                        });
                    };

                    window.addEventListener("scroll", handleScroll);

                    return () => window.removeEventListener("scroll", handleScroll);
                });
            }
        };

        textOpacityScroll();
    }, []);

    return (
        <div className="wrapper bg-black text-blue-300">
            <div className="text-section relative min-h-[200vh] ">
                <div className="text-section_wrapper sticky top-0 left-0 flex min-h-screen items-center ">
                    <p
                        className="text-section_value text-6xl font-semibold leading-[1.3] max-w-[80rem] px-4 py-5 mx-auto text-center"
                        data-text-speed="500"
                        data-text-opacity="0.1"
                    >
                        Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore.
                    </p>
                </div>
                <div className="text-section_mask h-[16.666%] absolute w-full top-[33.333%] left-0"></div>
            </div>
        </div>
    );
};

export default TextOpacityScroll;
