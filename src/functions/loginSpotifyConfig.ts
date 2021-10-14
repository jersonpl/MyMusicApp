const endpoint = 'https://accounts.spotify.com/authorize';
const clientID = '9ca64e0015de458f9448b08016d05321';
export const redirectUri = 'https://www.jersonpl.com/spotify-login-callback';
export const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-read-playback-position',
  'user-read-email',
  'user-read-private',
  'user-top-read',
  'user-modify-playback-state',
  'user-library-read',
  'user-library-modify',
  'user-follow-read',
  'user-follow-modify',
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-read-collaborative',
  'app-remote-control',
  'streaming',
  'ugc-image-upload',
];

export default `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&show_dialog=true`;
