import { Track } from "../../interfaces"
import LocalDB from "../../LocalDB"
import api from "../../utils/api"
import errorRequest from "../../utils/errorRequest"
import request from "../../utils/request"
import { TrackReducer } from "../reducers/tracks.reducer"

const localDB = new LocalDB();

export interface inAddOrRemoveTrack {
  track: Track 
  tracks: TrackReducer
  isFav: boolean
}

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
      dispatch(setTracks({items: [...(tracks.offset === 0 ? [] : tracks.items), ..._tracks], total: resTracks.response.total, offset: tracks.offset}));
    }else{
      errorRequest({response: resTracks, navigation})
    }
  }
}

export const addOrRemoveTrack = ({track, tracks, isFav} : inAddOrRemoveTrack) => {
  return (dispatch) => {
    let _tracks: Track[] = tracks.items;
    let total = tracks.total;
    if(isFav){
      total -= 1;
      _tracks.splice(tracks.items.findIndex(e => e.id === track.id),1);
      request({link: api.tracks, method: "DELETE", body: {ids: [track.id]}});
    }else{
      total += 1;
      _tracks.unshift({...track, isFav: true});
      request({link: api.tracks, method: "PUT", body: {ids: [track.id]}});
    }
    dispatch(setTracks({...tracks, items: _tracks, total}));
  }
}