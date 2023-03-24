import React from "react";
import "./Parallax.css";
import {useParallax} from "react-scroll-parallax";

const ParallaxElem = () => {

    const parallax = useParallax({
        translateY: [-100, 100, 'easeInOut'],
        scale: [0, 2, 'easeOutBack'],
    });

    return (
        <div className="ParallaxElem">
            <h1 ref={parallax.ref} className={"h1-parallax"}>Hello</h1>
        </div>
    );
};

export default ParallaxElem;