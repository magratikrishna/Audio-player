import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingHome from './components/webComponents/landingPage/LandingHome';
import MainLayout from './components/webComponents/musicHome/librarySection/MusicHomeMainLayout';
import LibraryLayout from './components/webComponents/musicHome/librarySection/MusicHomeLibraryLayout';
import Upload from './components/webComponents/upload/UploadFormView';
import AudioPlayer from './components/webComponents/musicHome/librarySection/AudioPlayer';
import PlayerState from './context/PlayerState';
import AudioController from './components/webComponents/musicHome/librarySection/AudioController';

function App() {
  return (
    <Router>
    <div className="App">
      <PlayerState>
      <Switch>
        <Route exact path="/" component={LandingHome} />
        <Route exact path="/musicHome" component={MainLayout} />
        <Route exact path="/musicHome/library" component={LibraryLayout} />
        <Route exact path="/musicHome/library/upload" component={Upload} />
        <Route exact path="/musicHome/library/controller" component={AudioController} />
      </Switch>
      </PlayerState>
    </div>
    </Router>
  );
}

export default App;
