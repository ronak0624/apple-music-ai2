const sanitize = response => {

    return new Promise((resolve, reject) => {
        const { results } = response.data;

        let clean = {}
        if (results.songs) {
            let songList = []

            results.songs.data.map(song => {
                let { name, albumName, artistName, artwork, genreNames, url } = song.attributes;

                let current = {
                    id: parseInt(song.id),
                    name: name,
                    albumName: albumName,
                    artistName: artistName,
                    artwork: artwork.url,
                    genreNames: genreNames,
                    url: url,
                    preview: song.attributes.previews[0].url
                }

                songList.push(current);
            })
            clean.song = songList;
        }

        if (results.artists) {
            let artistList = []

            results.artists.data.map(artist => {
                let { name, genreNames, url } = artist.attributes;

                let current = {
                    id: parseInt(artist.id),
                    name: name,
                    genreNames: genreNames,
                    url: url
                }

                artistList.push(current);
            })
            clean.artist = artistList;
        }

        if (results.albums) {
            let albumList = []

            results.albums.data.map(album => {
                let { name, albumName, artistName, artwork, genreNames, url } = album.attributes;

                let current = {
                    id: parseInt(album.id),
                    name: name,
                    albumName: albumName,
                    artistName: artistName,
                    artwork: artwork.url,
                    genreNames: genreNames,
                    url: url
                }

                albumList.push(current);
            });

            clean.album = albumList;
        }

        if (results['music-videos']) {
            let videoList = []

            results['music-videos'].data.map(video => {
                let { name, albumName, artistName, artwork, genreNames, url } = video.attributes;

                let current = {
                    id: parseInt(video.id),
                    name: name,
                    albumName: albumName,
                    artistName: artistName,
                    artwork: artwork.url,
                    genreNames: genreNames,
                    url: url,
                    preview: video.attributes.previews[0].url
                }

                videoList.push(current);
            });

            clean['music-video'] = videoList;
        }

        if (results.playlists) {
            let playlistList = []

            results.playlists.data.map(playlist => {
                let { name, albumName, artistName, artwork, genreNames, url } = playlist.attributes;

                let current = {
                    id: playlist.id,
                    name: name,
                    albumName: albumName,
                    artistName: artistName,
                    artwork: artwork.url,
                    genreNames: genreNames,
                    url: url
                }

                playlistList.push(current);
            });

            clean.playlists = playlistList;
        }

        if (results.stations) {
            let stationList = []

            results.stations.data.map(station => {
                let { name, albumName, artistName, artwork, genreNames, url } = station.attributes;

                let current = {
                    id: station.id,
                    name: name,
                    albumName: albumName,
                    artistName: artistName,
                    artwork: artwork.url,
                    genreNames: genreNames,
                    url: url
                }

                stationList.push(current);
            });

            clean.station = stationList;
        }

        resolve(clean)
    })
}

module.exports = sanitize;