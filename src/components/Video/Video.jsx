import React, {useEffect, useRef} from 'react';
import "./Video.css";
import {Alert} from "react-bootstrap";
import {InView} from "react-intersection-observer";

const Video = () => {

    const [inView, setInView] = React.useState(false);
    const videoRef = useRef(null);
    const animate = "animate__animated animate__zoomIn";

    console.log(inView)

    useEffect(() => {
        if (inView) videoRef.current.play();
        if (!inView) videoRef.current.pause();
    },[inView])

    return (
        <InView onChange={setInView}>

            <Alert variant={inView ? "success" : "danger"} className="video-data">
                {inView && "Видео проигрывается"}
                {!inView && "Видео на паузе"}
            </Alert>

            <video
                className={`Video ${inView ? animate : ""}`}
                ref={videoRef}
                loop
                muted
            >
                <source src="/video-animation/video/video-bg.mp4" type="video/mp4" />
            </video>
        </InView>

    );
};

export default Video;
