import {Track} from '../interfaces';
import api from '../utils/api';
import request from '../utils/request';

const startIndex = 0;

export default async (tracks: Track[]): Promise<Track[]> => {
  const listTracksTemp: Track[] = JSON.parse(JSON.stringify(tracks));
  let listTracksIds = [];
  const lengthTracks = Math.ceil(listTracksTemp.length / 50);
  for (var trackIndex = startIndex; trackIndex < lengthTracks; trackIndex++) {
    listTracksIds.push(listTracksTemp.splice(0, 50).map(item => item.id));
  }

  let listTracksIdsLiked: boolean[] = [];
  for (var tracksIds of listTracksIds) {
    const responseListTrackIfLiked = await request({
      link: api.tracks_contains,
      method: 'GET',
      body: {ids: tracksIds},
    });
    if (responseListTrackIfLiked.success) {
      listTracksIdsLiked = [
        ...listTracksIdsLiked,
        ...responseListTrackIfLiked.response,
      ];
    }
  }
  let returnedListTracks = tracks.map((item, index) => ({
    ...item,
    isFav: listTracksIdsLiked[index],
  }));
  return returnedListTracks;
};
