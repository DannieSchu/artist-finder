import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistFinder from '../../containers/ArtistFinder/ArtistFinder.jsx';
import ReleasesContainer from '../../containers/ReleasesContainer/ReleasesContainer.jsx';
import Recording from '../Recordings/Recording.jsx';

export default function App() {
  return (
    <Router>
      <Recording title="wonderful world"/>
      <Switch>
        <Route path ='/artist/:artistId' component={ReleasesContainer} />
        <Route exact path ='/' component={ArtistFinder} />
      </Switch>
    </Router>
  );
}
