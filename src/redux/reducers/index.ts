import {combineReducers} from 'redux';
import playlistsReducer from './playlists.reducer';
import tracksReducer from './tracks.reducer';
import userProfileReducer from './userProfile.reducer';

const reducers = combineReducers({
  userProfile: userProfileReducer,
  playlists: playlistsReducer,
  tracks: tracksReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
