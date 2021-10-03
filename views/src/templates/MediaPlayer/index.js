import audioPlayer from './Audio';
import videoPlayer from './Video';
import Play from "./Play";
import Pause from "./Pause";
import Rewind from './Rewind';
import Skip from './Skip';
import Progress from './Progress';

import { XIcon } from "@heroicons/react/outline";

export default function Player(props) {
    const { src, type, name, artist, closePlayer } = props;
    let { currentTime, duration, playing, setPlaying, setClickedTime } = false;


    if (type === 'audio') {
        ({ currentTime, duration, playing, setPlaying, setClickedTime } = audioPlayer());
    } else {
        ({ currentTime, duration, playing, setPlaying, setClickedTime } = videoPlayer());
    }

    return (
        <div className="w-screen fixed bottom-0 bg-gray-700 p-5 text-gray-50">
            <div onClick={() => closePlayer()} className="row-auto mb-3 cursor-pointer">
                <XIcon className="w-8 h-8" />
            </div>
            {type === "audio" ?
                <div className="w-full">
                    <h2 className="text-xl">{name}</h2>
                    <p className="text-lg mb-5">by {artist}</p>
                    <Progress currentTime={currentTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
                    <div className="w-full h-10 flex justify-center">
                        <audio id="audio" autoPlay src={src}></audio>
                        <Rewind handleClick={() => setClickedTime(currentTime - 5)} />
                        {playing ?
                            <Pause handleClick={() => setPlaying(false)} /> :
                            <Play handleClick={() => setPlaying(true)} />
                        }

                        <Skip handleClick={() => setClickedTime(currentTime + 5)} />
                    </div>
                </div>
                :
                <div className="relative">
                    <video id="video" className="mx-auto w-full" src={src} autoPlay controls />
                    <div onClick={() => setClickedTime(currentTime - 5)} className="absolute left-0 w-10 h-5/6 top-0">
                        <div className="absolute top-1/2 left-4">
                            <Rewind handleClick={() => setClickedTime(currentTime - 5)} />
                        </div>
                    </div>
                    <div onClick={() => setClickedTime(currentTime + 5)} className="absolute right-0 w-10 h-5/6 top-0">
                        <div className="absolute top-1/2 right-4">
                            <Skip handleClick={() => setClickedTime(currentTime + 5)} />
                        </div>
                    </div>
                    <h2 className="text-xl">{name}</h2>
                    <p className="text-lg">by {artist}</p>
                </div>
            }
        </div>
    )
}