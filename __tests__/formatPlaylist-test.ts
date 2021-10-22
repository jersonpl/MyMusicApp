import formatPlaylist from '../src/functions/formatPlaylist';
import constants from '../src/values/constants';

test('check formatPlaylist', () => {
  expect(formatPlaylist(constants.playlistWithoutFormat)).toStrictEqual(
    constants.playlistWithFormat,
  );
});
