import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import IsLoading from '../src/components/IsLoading';

it('Render IsLoading, visible', () => {
  const rendered = renderer.create(<IsLoading visible />).toJSON();
  expect(rendered).toBeTruthy();
});

it('Render IsLoading, not visible', () => {
  const rendered = renderer.create(<IsLoading />).toJSON();
  expect(rendered).toBe(null);
});
