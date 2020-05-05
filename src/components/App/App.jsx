import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route 
} from 'react-router-dom';
import ArtistFinder from '../../containers/ArtistFinder/ArtistFinder.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path ='/' component={ArtistFinder} />
        </Switch>
      </Router>
    </>
  );
}
