export const fetchArtists = query => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`)
    .then(response => response.json())
    .then(json => json.artists.map(artist => ({
      id: artist.id,
      name: artist.name,
      origin: artist?.area?.name,
      birth: artist['life-span'].begin,
      died: artist['life-span'].end,
    })));
};

export const fetchArtist = artistId => {
  return fetch(`https://musicbrainz.org/ws/2/artist/${artistId}?&fmt=json`)
    .then(response => response.json())
    .then(json => json.name);
};

export const fetchReleases = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(response => response.json())
    .then(json => json.releases.map(release => ({
      id: release.id,
      url: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : '../../assets/music-icon.svg',
      title: release.title,
      date: release.date
    })));
};
