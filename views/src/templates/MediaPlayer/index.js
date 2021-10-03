import ReactAudioPlayer from 'react-audio-player';

export default function Player(props) {
    const { src, type } = props;

    return (
        <div className="w-screen fixed bottom-0">
            <p>{src}</p>
            <ReactAudioPlayer
                src={src}
                autoPlay
                controls
            />
        </div>
    )
}