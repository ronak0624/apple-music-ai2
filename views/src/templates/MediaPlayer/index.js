import ReactAudioPlayer from 'react-audio-player';
import audioPlayer from './Audio';
import Play from "./Play"
import Pause from "./Pause"

export default function Player(props) {
    const { src, type, song } = props;
    let { currentTime, duration, playing, setPlaying, setClickedTime } = false;


    if (src) {
        ({ currentTime, duration, playing, setPlaying, setClickedTime } = audioPlayer());
    }

    return (
        <div className="w-screen fixed bottom-0 bg-gray-700 p-5 text-gray-50">
            <p>{src}</p>
            {type === "audio" ?
                <div className="w-full flex justify-center h-10">
                    <audio id="audio" autoPlay src={src}></audio>
                    {playing ?
                        <Pause handleClick={() => setPlaying(false)} /> :
                        <Play handleClick={() => setPlaying(true)} />
                    }
                </div>
                :
                <video src={src} autoPlay controls />
            }
        </div>
    )
}