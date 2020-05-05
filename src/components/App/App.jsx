import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route 
} from 'react-router-dom';
import ArtistFinder from '../../containers/ArtistFinder/ArtistFinder.jsx';
import ReleasesContainer from '../../containers/ReleasesContainer/ReleasesContainer.jsx';
import Release from '../Releases/Release.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path ='/' component={ArtistFinder} />
          <Route exact path ='/releases/:id' component={ReleasesContainer} />
        </Switch>
      </Router>
    </>
  );
}
