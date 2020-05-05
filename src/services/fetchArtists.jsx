export const fetchArtists = query => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`)
    .then(response => response.json())
    .then(json => json.artists.map(artist => ({
      id: artist.id,
      name: artist.name,
      origin: artist.area.name,
      birth: artist.life-span.birth,
    })));
};
