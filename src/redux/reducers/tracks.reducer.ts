import {Track} from '../../interfaces';
import {ActionTypeTracks} from '../actions/tracks';

export interface TrackReducer {
  total: number;
  offset: number;
  items: Track[];
}

const initialState: TrackReducer = {
  total: 0,
  offset: 0,
  items: [],
};

export default (state = initialState, action: ActionTypeTracks) => {
  switch (action.type) {
    case 'saveTracks':
      return action.tracks;
    default:
      return state;
  }
};
