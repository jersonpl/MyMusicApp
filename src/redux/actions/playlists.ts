import api from '../../utils/api';
import errorRequest from '../../utils/errorRequest';
import request from '../../utils/request';
import {PlaylistReducer} from '../reducers/playlists.reducer';

export const setPlaylists = (playlists: PlaylistReducer) => ({
  type: 'savePlaylists',
  playlists,
});

export const changePlaylistsOffset = ({
  playlists,
  offset,
  navigation,
}: {
  playlists: PlaylistReducer;
  offset: number;
  navigation: any;
}) => {
  return dispatch => {
    let _playlists = {...playlists, offset};
    dispatch(getPlaylists({navigation, playlists: _playlists}));
  };
};

export const getPlaylists = ({
  navigation,
  playlists,
  onFinish,
}: {
  navigation: any;
  playlists: PlaylistReducer;
  onFinish?: () => void;
}) => {
  return async dispatch => {
    let resPlaylists = await request({
      link: api.playlists,
      method: 'GET',
      body: {offset: playlists.offset, limit: 20},
    });
    if (resPlaylists.success) {
      dispatch(
        setPlaylists({
          items: [...playlists.items, ...resPlaylists.response.items],
          total: resPlaylists.response.total,
          offset: playlists.offset,
        }),
      );
    } else {
      errorRequest({response: resPlaylists, navigation});
    }
    onFinish();
  };
};
