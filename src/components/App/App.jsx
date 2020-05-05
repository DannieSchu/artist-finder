import React from 'react';
import ArtistFinder from '../../containers/ArtistFinder/ArtistFinder.jsx';
import Artist from '../Artists/Artist.jsx';

export default function App() {
  return (
    <>
      <ArtistFinder />
      <Artist name="Leonard Cohen"
        origin="Canada"
        birth="1934-09-21" />
    </>
  );
}
