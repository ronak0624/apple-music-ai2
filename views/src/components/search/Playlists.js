function Playlists(props) {
    const { resultList } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold mb-3">Playlists</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {resultList && resultList.map(playlist => {
                    let artwork = playlist.artwork.replace("{w}", "600");
                    artwork = artwork.replace("{h}", "800");

                    return (
                        <div className="inline-block p-2">
                            <img src={artwork} alt="artwork"></img>
                            <h4 className="font-semibold mt-2">{playlist.name}</h4>
                            <p className="text-sm text-gray-600">Playlist</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Playlists;