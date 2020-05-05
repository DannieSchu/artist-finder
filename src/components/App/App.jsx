import React from 'react';
import ArtistFinder from '../../containers/ArtistFinder/ArtistFinder.jsx';
import Artist from '../Artists/Artist.jsx';
import Artists from '../Artists/Artists.jsx';

export default function App() {
  const artists = [{
    id: 'gh8932hg3gee',
    name: 'Leonard Cohen',
    origin: 'Canada',
    birth: '1934-09-21' },
  {
    id: '6943w0utw0ghjvdr',
    name: 'Leonard Cohen',
    origin: 'Canada',
    birth: '1934-09-21' },
  {
    id: 't430tu340grjid',
    name: 'Leonard Cohen',
    origin: 'Canada',
    birth: '1934-09-21' },
  ];

  return (
    <>
      <ArtistFinder />
      <Artists artists={artists} />
    </>
  );
}
