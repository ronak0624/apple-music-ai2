function Artists(props) {
    const { resultList } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold mb-3">Artists</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {resultList && resultList.map(artist => {

                    return (
                        <div className="inline-block p-2">
                            <h4 className="font-semibold mt-2">{artist.name}</h4>
                            <span className="text-sm text-gray-600">{artist.genreNames.join(", ")}</span>
                            <p className="text-sm text-gray-600">Artist</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Artists;