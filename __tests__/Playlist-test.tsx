import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Playlist from '../src/components/Playlist';
import constants from '../src/values/constants';

it('Renders Playlist without crashing', () => {
  const rendered = renderer
    .create(<Playlist data={constants.playlist} onPress={() => {}} />)
    .toJSON();
  expect(rendered).toBeTruthy();
});
