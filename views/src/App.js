import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './templates/Navbar';

function App() {
    return (
        <Router>
            <div className="App"></div>

            <Navbar />

            <Switch>
                <Route path="/" component={Dashboard}></Route>
            </Switch>
        </Router>
    );
}

export default App;
