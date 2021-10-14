import React from 'react';
import {View, Image, ViewStyle, StyleSheet} from 'react-native';
import logo from '../assets/logo.png';
import logo_white from '../assets/logo_white.png';

interface Props {
  style?: ViewStyle;
  showWhite?: boolean;
}

export default ({style, showWhite}: Props) => (
  <View style={[styles.container, style]}>
    <Image source={!showWhite ? logo : logo_white} style={styles.image} />
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
