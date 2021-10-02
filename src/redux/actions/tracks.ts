import { Track } from "../../interfaces"
import LocalDB from "../../LocalDB"
import api from "../../utils/api"
import errorRequest from "../../utils/errorRequest"
import request from "../../utils/request"
import { TrackReducer } from "../reducers/tracks.reducer"

const localDB = new LocalDB();

export const setTracks = (tracks: TrackReducer) => ({
  type : "saveTracks", 
  tracks
})

export const changeTracksOffset = ({tracks, offset, navigation} : {tracks: TrackReducer, offset: number, navigation: any}) => {
  return (dispatch) => {
    let _tracks = {...tracks, offset};
    dispatch(getTracks({navigation, tracks: _tracks}));
  }
}

export const getTracks = ({navigation, tracks} : {navigation: any, tracks: TrackReducer}) => {
  return async (dispatch) => {
    let resTracks = await request({link: api.tracks, method: "GET", body: {offset: tracks.offset, limit: 30}});
    if(resTracks.success){
      let _tracks: Track[] = resTracks.response.items.map(item => ({...item.track, isFav: true}));
      dispatch(setTracks({items: [...tracks.items, ..._tracks], total: resTracks.response.total, offset: tracks.offset}));
    }else{
      errorRequest({response: resTracks, navigation})
    }
  }
}

export const removeTrackFromFav = ({track, tracks} : {track: Track, tracks: TrackReducer}) => {
  return (dispatch) => {
    let _tracks: Track[] = tracks.items;
    _tracks.splice(tracks.items.findIndex(e => e.id === track.id),1);
    dispatch(setTracks({...tracks, items: _tracks}));
  }
}