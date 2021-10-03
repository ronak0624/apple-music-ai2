import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './templates/Navbar';
import MediaPlayer from './templates/MediaPlayer/index';

import { useState } from 'react'

function App() {
    const [currentMedia, setCurrentMedia] = useState(false);

    const playMedia = (src, type, name, artist) => {
        console.log("Artist", artist);
        setCurrentMedia({src: src, type: type, name: name, artist: artist});
    }

    return (
        <Router>
            <div className="App"></div>

            <Navbar />

            <Switch>
                <Route path="/">
                    <Dashboard play={playMedia} />
                </Route>
            </Switch>

           {currentMedia && <MediaPlayer src={currentMedia.src} type={currentMedia.type} name={currentMedia.name} artist={currentMedia.artist} />}
        </Router>
    );
}

export default App;
