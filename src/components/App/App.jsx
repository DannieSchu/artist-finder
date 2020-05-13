import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistFinder from '../Artists/ArtistFinder.jsx';
import ReleasesContainer from '../Releases/ReleasesFinder.jsx';
import RecordingsContainer from '../Recordings/Recordings.jsx';
import LyricsContainer from '../../containers/LyricsContainer/LyricsContainer.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/recording/:recordingId' component={LyricsContainer} />
        <Route path ='/release/:releaseId' component={RecordingsContainer} />
        <Route path ='/artist/:artistId' component={ReleasesContainer} />
        <Route exact path ='/' component={ArtistFinder} />
      </Switch>
    </Router>
  );
}
