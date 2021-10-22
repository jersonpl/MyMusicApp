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

const playlistWithoutFormat = {
  collaborative: false,
  description: 'Con Ivan Villazon, Manuel Medrano, Bacilos y más',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1E4nxzJuZa2ucY',
  },
  followers: {href: null, total: 14432},
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
    external_urls: {spotify: 'https://open.spotify.com/user/spotify'},
    href: 'https://api.spotify.com/v1/users/spotify',
    id: 'spotify',
    type: 'user',
    uri: 'spotify:user:spotify',
  },
  primary_color: null,
  public: false,
  snapshot_id:
    'MTYzNDkxNzY3MywwMDAwMDAwMGQxMzY3MGE0NWJmYzUyZDRkZThkNmU1OTI0ZjkzNTUy',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1E4nxzJuZa2ucY/tracks?offset=0&limit=2',
    items: [
      {
        added_at: '1970-01-01T00:00:00Z',
        added_by: {
          external_urls: {spotify: 'https://open.spotify.com/user/'},
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/49Z1AvGeUaBSanPaOmplK6',
                },
                href: 'https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6',
                id: '49Z1AvGeUaBSanPaOmplK6',
                name: 'Andrés Cepeda',
                type: 'artist',
                uri: 'spotify:artist:49Z1AvGeUaBSanPaOmplK6',
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/17iAbw8ZsuixaaATKdBIEB',
            },
            href: 'https://api.spotify.com/v1/albums/17iAbw8ZsuixaaATKdBIEB',
            id: '17iAbw8ZsuixaaATKdBIEB',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273c05fd08ca89f68bdfef5a21e',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02c05fd08ca89f68bdfef5a21e',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851c05fd08ca89f68bdfef5a21e',
                width: 64,
              },
            ],
            name: 'Trece',
            release_date: '2020-05-13',
            release_date_precision: 'day',
            total_tracks: 12,
            type: 'album',
            uri: 'spotify:album:17iAbw8ZsuixaaATKdBIEB',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/49Z1AvGeUaBSanPaOmplK6',
              },
              href: 'https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6',
              id: '49Z1AvGeUaBSanPaOmplK6',
              name: 'Andrés Cepeda',
              type: 'artist',
              uri: 'spotify:artist:49Z1AvGeUaBSanPaOmplK6',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/07YUOmWljBTXwIseAUd9TW',
              },
              href: 'https://api.spotify.com/v1/artists/07YUOmWljBTXwIseAUd9TW',
              id: '07YUOmWljBTXwIseAUd9TW',
              name: 'Sebastian Yatra',
              type: 'artist',
              uri: 'spotify:artist:07YUOmWljBTXwIseAUd9TW',
            },
          ],
          disc_number: 1,
          duration_ms: 193853,
          episode: false,
          explicit: false,
          external_ids: {isrc: 'COSO11800015'},
          external_urls: {
            spotify: 'https://open.spotify.com/track/19EmSSV5hAiMD6kSZXcoJC',
          },
          href: 'https://api.spotify.com/v1/tracks/19EmSSV5hAiMD6kSZXcoJC',
          id: '19EmSSV5hAiMD6kSZXcoJC',
          is_local: false,
          name: 'Magia (feat. Sebastián Yatra)',
          popularity: 58,
          preview_url:
            'https://p.scdn.co/mp3-preview/733573d87338cfcf0ddb11bb155add03e0546aa2?cid=9ca64e0015de458f9448b08016d05321',
          track: true,
          track_number: 2,
          type: 'track',
          uri: 'spotify:track:19EmSSV5hAiMD6kSZXcoJC',
        },
        video_thumbnail: {url: null},
      },
      {
        added_at: '1970-01-01T00:00:00Z',
        added_by: {
          external_urls: {spotify: 'https://open.spotify.com/user/'},
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/4uRH0vTYaGWjG1MK8K8RPE',
                },
                href: 'https://api.spotify.com/v1/artists/4uRH0vTYaGWjG1MK8K8RPE',
                id: '4uRH0vTYaGWjG1MK8K8RPE',
                name: 'Dragon & Caballero',
                type: 'artist',
                uri: 'spotify:artist:4uRH0vTYaGWjG1MK8K8RPE',
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/3bTxKb6I54lCSPkP385Ko8',
            },
            href: 'https://api.spotify.com/v1/albums/3bTxKb6I54lCSPkP385Ko8',
            id: '3bTxKb6I54lCSPkP385Ko8',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b27369bdc46e2e08837853e7ef59',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e0269bdc46e2e08837853e7ef59',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d0000485169bdc46e2e08837853e7ef59',
                width: 64,
              },
            ],
            name: 'Se Siente Bien (Special Edition)',
            release_date: '2009',
            release_date_precision: 'year',
            total_tracks: 10,
            type: 'album',
            uri: 'spotify:album:3bTxKb6I54lCSPkP385Ko8',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4uRH0vTYaGWjG1MK8K8RPE',
              },
              href: 'https://api.spotify.com/v1/artists/4uRH0vTYaGWjG1MK8K8RPE',
              id: '4uRH0vTYaGWjG1MK8K8RPE',
              name: 'Dragon & Caballero',
              type: 'artist',
              uri: 'spotify:artist:4uRH0vTYaGWjG1MK8K8RPE',
            },
          ],
          disc_number: 1,
          duration_ms: 244813,
          episode: false,
          explicit: false,
          external_ids: {isrc: 'FR59R1565654'},
          external_urls: {
            spotify: 'https://open.spotify.com/track/52xtApt0X5IZpV88lcSnnf',
          },
          href: 'https://api.spotify.com/v1/tracks/52xtApt0X5IZpV88lcSnnf',
          id: '52xtApt0X5IZpV88lcSnnf',
          is_local: false,
          name: 'Se Siente Bien',
          popularity: 60,
          preview_url:
            'https://p.scdn.co/mp3-preview/857afd3696901e50c3cb1a5cd0e00099cdf2cfe3?cid=9ca64e0015de458f9448b08016d05321',
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:52xtApt0X5IZpV88lcSnnf',
        },
        video_thumbnail: {url: null},
      },
      {
        added_at: '1970-01-01T00:00:00Z',
        added_by: {
          external_urls: {spotify: 'https://open.spotify.com/user/'},
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/282UIRNs6aprjrs0ynDn6v',
                },
                href: 'https://api.spotify.com/v1/artists/282UIRNs6aprjrs0ynDn6v',
                id: '282UIRNs6aprjrs0ynDn6v',
                name: 'Los De Adentro',
                type: 'artist',
                uri: 'spotify:artist:282UIRNs6aprjrs0ynDn6v',
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/7lNxWPJ2lAiCVWE3iACqpW',
            },
            href: 'https://api.spotify.com/v1/albums/7lNxWPJ2lAiCVWE3iACqpW',
            id: '7lNxWPJ2lAiCVWE3iACqpW',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b2738a319160c223734cea034bbb',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e028a319160c223734cea034bbb',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d000048518a319160c223734cea034bbb',
                width: 64,
              },
            ],
            name: 'Volver Amar',
            release_date: '2005-07-21',
            release_date_precision: 'day',
            total_tracks: 11,
            type: 'album',
            uri: 'spotify:album:7lNxWPJ2lAiCVWE3iACqpW',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/282UIRNs6aprjrs0ynDn6v',
              },
              href: 'https://api.spotify.com/v1/artists/282UIRNs6aprjrs0ynDn6v',
              id: '282UIRNs6aprjrs0ynDn6v',
              name: 'Los De Adentro',
              type: 'artist',
              uri: 'spotify:artist:282UIRNs6aprjrs0ynDn6v',
            },
          ],
          disc_number: 1,
          duration_ms: 247413,
          episode: false,
          explicit: false,
          external_ids: {isrc: 'COS010400135'},
          external_urls: {
            spotify: 'https://open.spotify.com/track/4cO7TlWSvphDKXlYQVi2bl',
          },
          href: 'https://api.spotify.com/v1/tracks/4cO7TlWSvphDKXlYQVi2bl',
          id: '4cO7TlWSvphDKXlYQVi2bl',
          is_local: false,
          name: 'Nubes Negras',
          popularity: 54,
          preview_url:
            'https://p.scdn.co/mp3-preview/5e448528bd5449591a383cac2bc863bbd829699e?cid=9ca64e0015de458f9448b08016d05321',
          track: true,
          track_number: 3,
          type: 'track',
          uri: 'spotify:track:4cO7TlWSvphDKXlYQVi2bl',
        },
        video_thumbnail: {url: null},
      },
    ],
    limit: 2,
    next: null,
    offset: 0,
    previous: null,
    total: 50,
  },
  type: 'playlist',
  uri: 'spotify:playlist:37i9dQZF1E4nxzJuZa2ucY',
};

const playlistWithFormat = {
  collaborative: false,
  description: 'Con Ivan Villazon, Manuel Medrano, Bacilos y más',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1E4nxzJuZa2ucY',
  },
  followers: {href: null, total: 14432},
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
    external_urls: {spotify: 'https://open.spotify.com/user/spotify'},
    href: 'https://api.spotify.com/v1/users/spotify',
    id: 'spotify',
    type: 'user',
    uri: 'spotify:user:spotify',
  },
  primary_color: null,
  public: false,
  snapshot_id:
    'MTYzNDkxNzY3MywwMDAwMDAwMGQxMzY3MGE0NWJmYzUyZDRkZThkNmU1OTI0ZjkzNTUy',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1E4nxzJuZa2ucY/tracks?offset=0&limit=2',
    items: [
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/49Z1AvGeUaBSanPaOmplK6',
              },
              href: 'https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6',
              id: '49Z1AvGeUaBSanPaOmplK6',
              name: 'Andrés Cepeda',
              type: 'artist',
              uri: 'spotify:artist:49Z1AvGeUaBSanPaOmplK6',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/17iAbw8ZsuixaaATKdBIEB',
          },
          href: 'https://api.spotify.com/v1/albums/17iAbw8ZsuixaaATKdBIEB',
          id: '17iAbw8ZsuixaaATKdBIEB',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273c05fd08ca89f68bdfef5a21e',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02c05fd08ca89f68bdfef5a21e',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851c05fd08ca89f68bdfef5a21e',
              width: 64,
            },
          ],
          name: 'Trece',
          release_date: '2020-05-13',
          release_date_precision: 'day',
          total_tracks: 12,
          type: 'album',
          uri: 'spotify:album:17iAbw8ZsuixaaATKdBIEB',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/49Z1AvGeUaBSanPaOmplK6',
            },
            href: 'https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6',
            id: '49Z1AvGeUaBSanPaOmplK6',
            name: 'Andrés Cepeda',
            type: 'artist',
            uri: 'spotify:artist:49Z1AvGeUaBSanPaOmplK6',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/07YUOmWljBTXwIseAUd9TW',
            },
            href: 'https://api.spotify.com/v1/artists/07YUOmWljBTXwIseAUd9TW',
            id: '07YUOmWljBTXwIseAUd9TW',
            name: 'Sebastian Yatra',
            type: 'artist',
            uri: 'spotify:artist:07YUOmWljBTXwIseAUd9TW',
          },
        ],
        disc_number: 1,
        duration_ms: 193853,
        episode: false,
        explicit: false,
        external_ids: {isrc: 'COSO11800015'},
        external_urls: {
          spotify: 'https://open.spotify.com/track/19EmSSV5hAiMD6kSZXcoJC',
        },
        href: 'https://api.spotify.com/v1/tracks/19EmSSV5hAiMD6kSZXcoJC',
        id: '19EmSSV5hAiMD6kSZXcoJC',
        is_local: false,
        name: 'Magia (feat. Sebastián Yatra)',
        popularity: 58,
        preview_url:
          'https://p.scdn.co/mp3-preview/733573d87338cfcf0ddb11bb155add03e0546aa2?cid=9ca64e0015de458f9448b08016d05321',
        track: true,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:19EmSSV5hAiMD6kSZXcoJC',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4uRH0vTYaGWjG1MK8K8RPE',
              },
              href: 'https://api.spotify.com/v1/artists/4uRH0vTYaGWjG1MK8K8RPE',
              id: '4uRH0vTYaGWjG1MK8K8RPE',
              name: 'Dragon & Caballero',
              type: 'artist',
              uri: 'spotify:artist:4uRH0vTYaGWjG1MK8K8RPE',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/3bTxKb6I54lCSPkP385Ko8',
          },
          href: 'https://api.spotify.com/v1/albums/3bTxKb6I54lCSPkP385Ko8',
          id: '3bTxKb6I54lCSPkP385Ko8',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27369bdc46e2e08837853e7ef59',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0269bdc46e2e08837853e7ef59',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485169bdc46e2e08837853e7ef59',
              width: 64,
            },
          ],
          name: 'Se Siente Bien (Special Edition)',
          release_date: '2009',
          release_date_precision: 'year',
          total_tracks: 10,
          type: 'album',
          uri: 'spotify:album:3bTxKb6I54lCSPkP385Ko8',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4uRH0vTYaGWjG1MK8K8RPE',
            },
            href: 'https://api.spotify.com/v1/artists/4uRH0vTYaGWjG1MK8K8RPE',
            id: '4uRH0vTYaGWjG1MK8K8RPE',
            name: 'Dragon & Caballero',
            type: 'artist',
            uri: 'spotify:artist:4uRH0vTYaGWjG1MK8K8RPE',
          },
        ],
        disc_number: 1,
        duration_ms: 244813,
        episode: false,
        explicit: false,
        external_ids: {isrc: 'FR59R1565654'},
        external_urls: {
          spotify: 'https://open.spotify.com/track/52xtApt0X5IZpV88lcSnnf',
        },
        href: 'https://api.spotify.com/v1/tracks/52xtApt0X5IZpV88lcSnnf',
        id: '52xtApt0X5IZpV88lcSnnf',
        is_local: false,
        name: 'Se Siente Bien',
        popularity: 60,
        preview_url:
          'https://p.scdn.co/mp3-preview/857afd3696901e50c3cb1a5cd0e00099cdf2cfe3?cid=9ca64e0015de458f9448b08016d05321',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:52xtApt0X5IZpV88lcSnnf',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/282UIRNs6aprjrs0ynDn6v',
              },
              href: 'https://api.spotify.com/v1/artists/282UIRNs6aprjrs0ynDn6v',
              id: '282UIRNs6aprjrs0ynDn6v',
              name: 'Los De Adentro',
              type: 'artist',
              uri: 'spotify:artist:282UIRNs6aprjrs0ynDn6v',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/7lNxWPJ2lAiCVWE3iACqpW',
          },
          href: 'https://api.spotify.com/v1/albums/7lNxWPJ2lAiCVWE3iACqpW',
          id: '7lNxWPJ2lAiCVWE3iACqpW',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2738a319160c223734cea034bbb',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e028a319160c223734cea034bbb',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048518a319160c223734cea034bbb',
              width: 64,
            },
          ],
          name: 'Volver Amar',
          release_date: '2005-07-21',
          release_date_precision: 'day',
          total_tracks: 11,
          type: 'album',
          uri: 'spotify:album:7lNxWPJ2lAiCVWE3iACqpW',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/282UIRNs6aprjrs0ynDn6v',
            },
            href: 'https://api.spotify.com/v1/artists/282UIRNs6aprjrs0ynDn6v',
            id: '282UIRNs6aprjrs0ynDn6v',
            name: 'Los De Adentro',
            type: 'artist',
            uri: 'spotify:artist:282UIRNs6aprjrs0ynDn6v',
          },
        ],
        disc_number: 1,
        duration_ms: 247413,
        episode: false,
        explicit: false,
        external_ids: {isrc: 'COS010400135'},
        external_urls: {
          spotify: 'https://open.spotify.com/track/4cO7TlWSvphDKXlYQVi2bl',
        },
        href: 'https://api.spotify.com/v1/tracks/4cO7TlWSvphDKXlYQVi2bl',
        id: '4cO7TlWSvphDKXlYQVi2bl',
        is_local: false,
        name: 'Nubes Negras',
        popularity: 54,
        preview_url:
          'https://p.scdn.co/mp3-preview/5e448528bd5449591a383cac2bc863bbd829699e?cid=9ca64e0015de458f9448b08016d05321',
        track: true,
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:4cO7TlWSvphDKXlYQVi2bl',
      },
    ],
    limit: 2,
    next: null,
    offset: 0,
    previous: null,
    total: 50,
  },
  type: 'playlist',
  uri: 'spotify:playlist:37i9dQZF1E4nxzJuZa2ucY',
};

export default {
  playlist,
  userProfile,
  track,
  playlistWithoutFormat,
  playlistWithFormat,
};
