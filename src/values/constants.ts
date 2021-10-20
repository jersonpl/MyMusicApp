import {Playlist, Track, UserProfile} from '../interfaces';

const userProfile: UserProfile = {
  country: 'CO',
  display_name: 'Jerson Pérez',
  email: 'jersonpl224@gmail.com',
  followers: {total: 0},
  id: 'a94uvj5k8unhkekqogxm23xvz',
  images: [],
  product: 'premium',
  uri: 'spotify:user:a94uvj5k8unhkekqogxm23xvz',
};

const playlist: Playlist = {
  collaborative: false,
  href: 'https://api.spotify.com/v1/playlists/37i9dQZF1E4nxzJuZa2ucY',
  id: '37i9dQZF1E4nxzJuZa2ucY',
  images: [
    {
      height: null,
      url: 'https://seeded-session-images.scdn.co/v1/img/artist/49Z1AvGeUaBSanPaOmplK6/es-LA',
      width: null,
    },
  ],
  name: 'Andrés Cepeda Radio',
  owner: {
    display_name: 'Spotify',
    id: 'spotify',
    uri: 'spotify:user:spotify',
    email: '',
    followers: {total: 0},
    product: '',
    country: '',
  },
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1E4nxzJuZa2ucY/tracks',
    total: 50,
  },
  uri: 'spotify:playlist:37i9dQZF1E4nxzJuZa2ucY',
};

const track: Track = {
  album: {
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/49Z1AvGeUaBSanPaOmplK6',
        },
        id: '49Z1AvGeUaBSanPaOmplK6',
        name: 'Andrés Cepeda',
        type: 'artist',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/53KTldaJ8tHSkYU3nigfwP',
        },
        id: '53KTldaJ8tHSkYU3nigfwP',
        name: 'Fonseca',
        type: 'artist',
      },
    ],
    id: '6emoXIIn6RQqbKt9PgMVzi',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273c37ec2e842224af0f4fc3a79',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02c37ec2e842224af0f4fc3a79',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851c37ec2e842224af0f4fc3a79',
        width: 64,
      },
    ],
    name: 'Mejor Que A Ti Me Va (Versión Reggae)',
    release_date: '2017-03-21',
    total_tracks: 1,
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/49Z1AvGeUaBSanPaOmplK6',
      },
      id: '49Z1AvGeUaBSanPaOmplK6',
      name: 'Andrés Cepeda',
      type: 'artist',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/53KTldaJ8tHSkYU3nigfwP',
      },
      id: '53KTldaJ8tHSkYU3nigfwP',
      name: 'Fonseca',
      type: 'artist',
    },
  ],
  id: '68RyOAQNqTeuKeaNIo03Gp',
  name: 'Mejor Que A Ti Me Va - Versión Reggae',
  track_number: 1,
  uri: 'spotify:track:68RyOAQNqTeuKeaNIo03Gp',
  isFav: true,
};

export default {playlist, userProfile, track};
