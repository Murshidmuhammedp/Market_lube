"use client";

import React, { useEffect } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const NeonCursor = () => {
    useEffect(() => {
        neonCursor({
            el: document.body, // Apply effect to the entire body
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
        });
    }, []);

    return null; // No visible elements, only cursor effect
};

export default NeonCursor;
