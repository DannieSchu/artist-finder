import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistFinder from '../../containers/ArtistFinder/ArtistFinder.jsx';
import ReleasesContainer from '../../containers/ReleasesContainer/ReleasesContainer.jsx';
import RecordingsContainer from '../../containers/RecordingsContainer/RecordingsContainer.jsx';
import LyricsContainer from '../../containers/LyricsContainer/LyricsContainer.jsx';
import Paging from '../Paging/Paging.jsx';

export default function App() {
  return (
    <Router>
      <Paging incrementPage={() => {}} page={1} totalPages={8} />
      <Switch>
        <Route path ='/recording/:recordingId' component={LyricsContainer} />
        <Route path ='/release/:releaseId' component={RecordingsContainer} />
        <Route path ='/artist/:artistId' component={ReleasesContainer} />
        <Route exact path ='/' component={ArtistFinder} />
      </Switch>
    </Router>
  );
}
