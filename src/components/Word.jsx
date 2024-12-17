import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

function Word() {

    const element = useRef(null);

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.40']
    });

    const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.`;
    const words = text.split(" ");

    const opacityValues = words.map((word, index) => {
        const start = index / words.length;
        const end = start + (1 / words.length)
        return useTransform(scrollYProgress, [start, end], [0, 1])
    });

    return (
        <div className='bg-black w-full h-screen flex items-center justify-center'>
            <div className='flex flex-wrap justify-center gap-x-1 text-center'>
                {words.map((word, index) => (
                    < motion.span
                        key={index}
                        ref={element}
                        style={{ opacity: opacityValues[index] }}
                        className="text-white text-center text-5xl leading-tight"
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </div>
        </div >
    )
}

export default Word