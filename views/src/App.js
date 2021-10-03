import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './templates/Navbar';
import MediaPlayer from './templates/MediaPlayer/index';

import { useState } from 'react'

function App() {
    const [currentMedia, setCurrentMedia] = useState(false);
    const playMedia = (src) => {
        console.log(src);
        setCurrentMedia(src);
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

            <MediaPlayer src={currentMedia} />
        </Router>
    );
}

export default App;
