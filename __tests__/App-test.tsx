import React from 'react';
import {render} from '@testing-library/react-native';
import Index from '../src/index';

let component: any;

describe('<App />', () => {
  beforeEach(() => {
    component = render(<Index />);
  });

  it('renderiza correctamenter', () => {
    console.log(component);
  });
});
