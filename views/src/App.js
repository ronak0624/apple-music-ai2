import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Playlist from './pages/Playlist';
import Navbar from './templates/Navbar';
import MediaPlayer from './templates/MediaPlayer/index';

import { useState } from 'react'

function App() {
    const [currentMedia, setCurrentMedia] = useState(false);
    const [playlists, setPlaylist] = useState({ "fun": [] });

    const playMedia = (src, type, name, artist) => {
        setCurrentMedia({ src: src, type: type, name: name, artist: artist });
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

    console.log(playlists);

    return (
        <Router>
            <div className="App"></div>

            <Navbar />

            <Switch>
                <Route path="/playlists">
                    <Playlist createNewPlaylist={createNewPlaylist} playlists={playlists} />
                </Route>

                <Route path="/">
                    <Dashboard playlists={playlists} addToPlaylist={addToPlaylist} play={playMedia} />
                </Route>

            </Switch>

            {currentMedia && <MediaPlayer src={currentMedia.src} type={currentMedia.type} name={currentMedia.name} artist={currentMedia.artist} />}
        </Router>
    );
}

export default App;
