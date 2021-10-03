
import AddToPlaylist from '../playlist/AddToPlaylist';
import { PlayIcon } from "@heroicons/react/solid";

function Videos(props) {
    const { resultList, play, addVideo, playlists } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold mb-3">Music Videos</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {resultList && resultList.map(video => {
                    let artwork = video.artwork.replace("{w}", "600");
                    artwork = artwork.replace("{h}", "800");

                    return (
                        <div className="inline-block p-2 cursor-pointer">
                            <div onClick={() => play(video.preview, 'video', video.name, video.artistName)} >
                                <div className="relative">
                                    <img src={artwork} alt="artwork"></img>
                                    <PlayIcon className="absolute w-16 h-16 right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                                <h4 className="font-semibold mt-2">{video.name}</h4>
                                <span className="text-sm text-gray-600">{video.genreNames.join(", ")}</span>
                                <p className="text-sm text-gray-600">Music Video</p>
                            </div>
                            <AddToPlaylist type="video" media={video} addToPlaylist={addVideo} playlists={Object.keys(playlists)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Videos;