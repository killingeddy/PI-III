import React, { useRef, useEffect } from "react";

export default function AudioPlayer({ audio, autoPlay, loop }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (autoPlay) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => { }).catch(error => {
                });
            }
        }
    }, [autoPlay]);

    return (
        <audio ref={audioRef} autoPlay={autoPlay} loop={loop} controls className="hidden 'bg-black'">
            <source src={audio} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
        </audio>
    );
}
