import { Playlist } from "../interfaces";

export default (response: any): Playlist => {
  let playlist: Playlist = {
    ...response, 
    tracks: {
      ...response.tracks, 
      items: response.tracks.items.map((_playList: any) => ({..._playList.track}))
    }
  }
  return playlist
}