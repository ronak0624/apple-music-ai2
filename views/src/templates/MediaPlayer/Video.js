import { useState, useEffect } from 'react';

export default function Video() {
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState();


    useEffect(() => {
        const video = document.getElementById("video");

        const setVideoData = () => {
            setDuration(video.duration);
            setCurrentTime(video.currentTime);
        }

        const setVideoTime = () => setCurrentTime(video.currentTime);

        video.addEventListener("loadeddata", setVideoData);

        video.addEventListener("timeupdate", setVideoTime);

        if (clickedTime && clickedTime !== currentTime) {
            video.currentTime = clickedTime;
            setClickedTime(null);
        }

        return () => {
            video.removeEventListener("loadeddata", setVideoData);
            video.removeEventListener("timeupdate", setVideoTime);
        }
    });

    return {
        currentTime,
        duration,
        playing,
        setPlaying,
        setClickedTime
    }
}