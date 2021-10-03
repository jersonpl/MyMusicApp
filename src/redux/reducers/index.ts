import { combineReducers } from 'redux';
import playlistsReducer from './playlists.reducer';
import trackPlayerReducer from './trackPlayer.reducer';
import tracksReducer from './tracks.reducer';
import userProfileReducer from './userProfile.reducer';


const reducers = combineReducers({
  userProfile: userProfileReducer,
  playlists: playlistsReducer,
  tracks: tracksReducer,
  trackPlayer: trackPlayerReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;