import React, { useRef, useEffect } from "react";

export default function AudioPlayer({ audio, autoPlay, loop }) {

    const audioRef = useRef(null);

    useEffect(() => {
        if (autoPlay) {
            audioRef.current.play();
        }
    }, [autoPlay]);

    return (
        <>
            <audio ref={audioRef} autoPlay={autoPlay} loop={loop} controls className="hidden 'bg-black'">
                <source src={audio} type="audio/mpeg" />
            </audio>
        </>
    );
}
