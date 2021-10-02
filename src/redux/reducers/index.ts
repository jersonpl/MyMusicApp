import { combineReducers } from 'redux';
import userProfileReducer from './userProfile.reducer';


const reducers = combineReducers({
  userProfile: userProfileReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;