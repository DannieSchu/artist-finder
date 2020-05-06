import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lyrics from '../../components/Lyrics/Lyrics.jsx';
import { fetchArtistByRecording, fetchRecording } from '../../services/musicbrainzAPI.jsx';
import { fetchLyrics } from '../../services/lyricsAPI.jsx';

const LyricsContainer = ({ match }) => {
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');
  const [recording, setRecording] = useState('');
  const [loading, setLoading] = useState(false);
  const { recordingId } = match.params;

  useEffect(() => {
    setLoading(true);
    fetchArtistByRecording(recordingId)
      .then(fetchedArtist => setArtist(fetchedArtist)),

    fetchRecording(recordingId)
      .then(fetchedRecording => setRecording(fetchedRecording)),

    Promise.all([
      fetchArtistByRecording(recordingId),
      fetchRecording(recordingId)
    ]).then(([artist, recording]) => fetchLyrics(artist, recording))
      .then(fetchedLyrics => setLyrics(fetchedLyrics))
      .then(() => setLoading(false));
  }, []);

  return (
    <Lyrics lyrics={lyrics} recording={recording} artist={artist} loading={loading} />
  );
};

LyricsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recordingId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default LyricsContainer;

