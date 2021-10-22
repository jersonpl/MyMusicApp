import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../src/components/Logo';

it('Renders Logo without crashing', () => {
  const rendered = renderer.create(<Logo />).toJSON();
  expect(rendered).toBeTruthy();
});
