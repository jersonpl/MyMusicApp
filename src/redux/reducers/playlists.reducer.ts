import { Playlist } from "../../interfaces"

export interface PlaylistReducer {
  total: number
  offset: number
  items: Playlist[] 
}

const initialState: PlaylistReducer  = {
  total: 0,
  offset: 0,
  items: []
}

export default(state = initialState, action) => {
  switch (action.type) {
    case 'savePlaylists':
      return action.playlists
    default:
      return state
  }
}