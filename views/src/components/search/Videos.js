
import AddToPlaylist from '../playlist/AddToPlaylist';

function Videos(props) {
    const { resultList, play, addVideo, playlists } = props;

    return (
        <div>
            <h3 className="text-xl font-bold mb-3">Music Videos</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {resultList && resultList.map(video => {
                    let artwork = video.artwork.replace("{w}", "600");
                    artwork = artwork.replace("{h}", "800");

                    return (
                        <div className="inline-block p-2">
                            <div onClick={() => play(video.preview, 'audio', video.name, video.artistName)} >
                                <img src={artwork}></img>
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