import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistFinder from '../../containers/ArtistFinder/ArtistFinder.jsx';
import ReleasesContainer from '../../containers/ReleasesContainer/ReleasesContainer.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/release/:releaseId' component={ReleasesContainer} />
        <Route path ='/artist/:artistId' component={ReleasesContainer} />
        <Route exact path ='/' component={ArtistFinder} />
      </Switch>
    </Router>
  );
}
