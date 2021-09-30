import { combineReducers } from 'redux';
import favoritesReducer from './favorites.reducer';
import songsReducer from './songs.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  songs: songsReducer
});