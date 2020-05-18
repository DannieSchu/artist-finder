import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistFinder from '../Artists/ArtistFinder.jsx';
import Lyrics from '../Lyrics/Lyrics.jsx';
import RecordingsFinder from '../Recordings/RecordingsFinder.jsx';
import ReleasesFinder from '../Releases/ReleasesFinder.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/recording/:recordingId' component={Lyrics} />
        <Route path ='/release/:releaseId' component={RecordingsFinder} />
        <Route path ='/artist/:artistId' component={ReleasesFinder} />
        <Route exact path ='/' component={ArtistFinder} />
      </Switch>
    </Router>
  );
}
