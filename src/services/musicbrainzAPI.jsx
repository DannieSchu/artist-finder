import placeholder from '../assets/music-icon.svg';

export const fetchArtists = (query, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=20&offset=${(page - 1) * 20}`)
    .then(response => response.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 20),
      artists: json.artists.map(artist => ({
        id: artist.id,
        name: artist.name,
        origin: artist?.area?.name,
        birth: artist['life-span'].begin,
        died: artist['life-span'].end,
      }))
    }));
};

export const fetchArtist = artistId => {
  return fetch(`https://musicbrainz.org/ws/2/artist/${artistId}?&fmt=json`)
    .then(response => response.json())
    .then(json => json.name);
};

export const fetchRelease = releaseId => {
  return fetch(`https://musicbrainz.org/ws/2/release/${releaseId}?&fmt=json`)
    .then(response => response.json())
    .then(json => json.title);
};

export const fetchReleases = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(response => response.json())
    .then(json => json.releases.map(release => ({
      id: release.id,
      url: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : placeholder,
      title: release.title,
      date: release.date
    })));
};

export const fetchRecordings = releaseId => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(response => response.json())
    .then(json => json.recordings.map(recording => ({
      id: recording.id,
      title: recording.title
    })));
};

export const fetchRecording = recordingId => {
  return fetch(`https://musicbrainz.org/ws/2/recording/${recordingId}?&fmt=json`)
    .then(response => response.json())
    .then(json => json.title);
};

export const fetchArtistByRecording = recordingId => {
  return fetch(`http://musicbrainz.org/ws/2/artist?recording=${recordingId}&fmt=json`)
    .then(response => response.json())
    .then(json => json.artists[0].name);
};
