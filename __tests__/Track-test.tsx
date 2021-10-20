import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import constants from '../src/values/constants';
import Track from '../src/components/Track';

it('Renders Track without crashing', () => {
  const rendered = renderer
    .create(<Track data={constants.track} addOrRemoveFav={() => {}} />)
    .toJSON();
  expect(rendered).toBeTruthy();
});
