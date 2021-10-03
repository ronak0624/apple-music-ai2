import audioPlayer from './Audio';
import Play from "./Play";
import Pause from "./Pause";
import Rewind from './Rewind';
import Skip from './Skip';
import Progress from './Progress';

export default function Player(props) {
    const { src, type, song } = props;
    let { currentTime, duration, playing, setPlaying, setClickedTime } = false;


    if (type === 'audio') {
        ({ currentTime, duration, playing, setPlaying, setClickedTime } = audioPlayer());
    }

    return (
        <div className="w-screen fixed bottom-0 bg-gray-700 p-5 text-gray-50">
            <p>{src}</p>
            {type === "audio" ?
                <div className="w-full">

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
                <video src={src} autoPlay controls />
            }
        </div>
    )
}