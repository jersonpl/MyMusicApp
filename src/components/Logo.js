/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import logo from '../assets/logo.png';
import logo_white from '../assets/logo_white.png';

export default ({style, showWhite}) => (
  <View style={[{width: 100, height: 100}, style]}>
    <Image
      source={!showWhite ? logo : logo_white}
      style={{width: '100%', height: '100%', resizeMode: 'cover'}}
    />
  </View>
);
