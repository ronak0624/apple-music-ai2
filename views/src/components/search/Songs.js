
import AddToPlaylist from '../playlist/AddToPlaylist';

function Songs(props) {
    const { resultList, play, addSong, playlists } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold mb-3">Songs</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {resultList && resultList.map(song => {
                    let artwork = song.artwork.replace("{w}", "600");
                    artwork = artwork.replace("{h}", "800");

                    return (
                        <div className="inline-block p-2">
                            <div onClick={() => play(song.preview, 'audio', song.name, song.artistName)} >
                                <img src={artwork}></img>
                                <h4 className="font-semibold mt-2">{song.name}</h4>
                                <span className="text-sm text-gray-600">{song.genreNames.join(", ")}</span>
                                <p className="text-sm text-gray-600">Song</p>
                            </div>
                            <AddToPlaylist type="audio" media={song} addToPlaylist={addSong} playlists={Object.keys(playlists)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Songs;