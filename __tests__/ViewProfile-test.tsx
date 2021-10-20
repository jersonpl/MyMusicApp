import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import constants from '../src/values/constants';
import ViewProfile from '../src/components/ViewProfile';

it('Renders Playlist without crashing', () => {
  const rendered = renderer
    .create(<ViewProfile userProfile={constants.userProfile} />)
    .toJSON();
  expect(rendered).toBeTruthy();
});
