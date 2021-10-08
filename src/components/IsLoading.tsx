import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../values/colors';

export default ({visible}: {visible: boolean}) =>
  !visible ? null : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secundary,
  },
});
