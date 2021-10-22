import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import logo_white from '../assets/logo_white.png';
import logo from '../assets/logo.png';

type Props = {
  style?: ViewStyle;
  showWhite?: boolean;
};

export default ({style, showWhite}: Props) => (
  <View style={[styles.container, style]}>
    <FastImage source={showWhite ? logo_white : logo} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
