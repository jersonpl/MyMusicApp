import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BasicComponent from '../src/components/CustomBasic/BasicComponent';

it('Renders BasicComponent without crashing', () => {
  const rendered = renderer.create(<BasicComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
