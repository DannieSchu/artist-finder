export const fetchArtists = query => {
  fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`)
    .then(response => response.json())
    .then(json => json.artists.map(artist => ({
      artistName: artist.name,
      artistId: artist.id
    })));
};
