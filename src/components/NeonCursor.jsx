import React, { useEffect, useRef } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const NeonCursor = () => {
    const appRef = useRef(null);

    useEffect(() => {
        let neonEffect;
        if (appRef.current) {
            neonEffect = neonCursor({
                el: appRef.current,
                shaderPoints: 16,
                curvePoints: 20,
                curveLerp: 0.5,
                radius1: 5,
                radius2: 30,
                velocityTreshold: 10,
                sleepRadiusX: 100,
                sleepRadiusY: 100,
                sleepTimeCoefX: 0.0025,
                sleepTimeCoefY: 0.0025,
                color1: "yellow",
                color2: "yellow",
            });
        }
    }, []);


    return (
        <div
            ref={appRef}
            className="w-full h- text-white bg-black text-center font-sans"
        >
        </div>
    );
};

export default NeonCursor;
