import {Playlist} from '../../interfaces';
import { ActionTypePlaylist } from '../actions/playlists';

export interface PlaylistReducer {
  total: number;
  offset: number;
  items: Playlist[];
}

const initialState: PlaylistReducer = {
  total: 0,
  offset: 0,
  items: [],
};

export default (state = initialState, action: ActionTypePlaylist) => {
  switch (action.type) {
    case 'savePlaylists':
      return action.playlists;
    default:
      return state;
  }
};
