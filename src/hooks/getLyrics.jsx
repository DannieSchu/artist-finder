import { useState, useEffect } from 'react';
import { fetchArtistByRecording, fetchRecording } from '../services/musicbrainzAPI.jsx';
import { fetchLyrics } from '../services/lyricsAPI.jsx';

export const useGetLyrics = (recordingId) => {
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');
  const [recording, setRecording] = useState('');
  const [loading, setLoading] = useState(false);

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

  return { lyrics, recording, artist, loading };
};
