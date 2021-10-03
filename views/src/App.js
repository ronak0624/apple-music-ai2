import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Playlist from './pages/Playlist';
import Navbar from './templates/Navbar';
import MediaPlayer from './templates/MediaPlayer/index';

import { useState } from 'react'

function App() {
    const [currentMedia, setCurrentMedia] = useState(false);
    const [playlists, setPlaylist] = useState(false);
    const [searchResults, setSearchResults] = useState(false);

    const playMedia = (src, type, name, artist) => {
        setCurrentMedia({ src: src, type: type, name: name, artist: artist });
    }

    const closePlayer = () => {
        setCurrentMedia(false);
    }

    const addToPlaylist = (media, playlist, type) => {
        media.type = type;

        if (playlists[playlist].length > 0) {

            let newList = [...playlists[playlist], media];
            setPlaylist({ ...playlists, [playlist]: newList });

        } else {
            setPlaylist({ ...playlists, [playlist]: [media] })
        }
    }

    const createNewPlaylist = (name) => {
        setPlaylist({ ...playlists, [name]: [] })
    }

    const removeFromPlaylist = (id, playlist) => {
        let newList = playlists[playlist].filter(item => item.id !== parseInt(id));

        setPlaylist({...playlists, [playlist]: newList})
    } 

    return (
        <Router>
            <div className="App"></div>

            <Navbar />

            <Switch>
                <Route path="/playlists">
                    <Playlist play={playMedia} removeFromPlaylist={removeFromPlaylist} createNewPlaylist={createNewPlaylist} playlists={playlists} />
                </Route>

                <Route path="/">
                    <Dashboard searchResults={searchResults} setSearchResults={setSearchResults} playlists={playlists} addToPlaylist={addToPlaylist} play={playMedia} />
                </Route>

            </Switch>

            {currentMedia && <MediaPlayer closePlayer= {closePlayer} src={currentMedia.src} type={currentMedia.type} name={currentMedia.name} artist={currentMedia.artist} />}
        </Router>
    );
}

export default App;
