export interface Auth {
  access_token?: string;
  token_type?: string;
  expires_in?: string;
}

export interface ImageUrl {
  url: string;
  height: number;
  width: number;
}

export interface UserProfile {
  id: string;
  country: string;
  display_name: string;
  email: string;
  explicit_content: (string | boolean)[];
  followers: {total: number};
  product: string;
  images?: ImageUrl[];
  uri: string;
}

export interface Artist {
  id: string;
  name: string;
  type: string;
  external_urls: object;
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  track_number: number;
  uri: string;
  album: Album;
  isFav?: boolean;
}

export interface Album {
  id: string;
  images: ImageUrl[];
  name: string;
  release_date: string;
  total_tracks: number;
  artists: Artist[];
  tracks?: {href: string; items: Track[]};
}

export interface Playlist {
  id: string;
  name: string;
  owner: UserProfile;
  images: ImageUrl[];
  tracks: {href: string; total: number; items?: Track[]};
  collaborative: number;
  uri: string;
  href: string;
  followers?: {total: number};
}
