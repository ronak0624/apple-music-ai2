function Albums(props) {
    const { resultList } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold mb-3">Albums</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {resultList && resultList.map(album => {
                    let artwork = album.artwork.replace("{w}", "600");
                    artwork = artwork.replace("{h}", "800");

                    return (
                        <div className="inline-block p-2">
                            <img src={artwork} alt="artwork"></img>
                            <h4 className="font-semibold mt-2">{album.name}</h4>
                            <span className="text-sm text-gray-600">{album.genreNames.join(", ")}</span>
                            <p className="text-sm text-gray-600">Album</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Albums;