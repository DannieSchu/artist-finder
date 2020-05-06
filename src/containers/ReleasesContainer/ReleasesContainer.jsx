import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Releases from '../../components/Releases/Releases.jsx';
import { fetchArtist, fetchReleases } from '../../services/musicbrainzAPI.jsx';

const ReleasesContainer = () => {
  const [releases, setReleases] = useState([]);
  const [selectedArtist, setArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const { artist } = useParams();

  useEffect(() => {
    fetchArtist(artist)
      .then(fetchedArtist => setArtist(fetchedArtist));

    fetchReleases(artist)
      .then(fetchedReleases => setReleases(fetchedReleases))
      .then(() => setLoading(false));
  }, []);

  return (
    <Releases releases={releases} heading={selectedArtist} loading={loading} />
  );
};

export default ReleasesContainer;
