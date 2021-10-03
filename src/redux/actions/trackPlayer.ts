import LocalDB from "../../LocalDB"
import { TrackPlayerReducer } from "../reducers/trackPlayer.reducer"

const localDB = new LocalDB();

export const setTrackPlayer = (trackPlayer: TrackPlayerReducer) => ({
  type : "saveTrackPlayer", 
  trackPlayer
})

export const saveTrackPlayer = (trackPlayer: TrackPlayerReducer) => {
  return (dispatch) => {
    dispatch(setTrackPlayer(trackPlayer));
  } 
}